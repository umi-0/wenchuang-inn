"""Quick deploy: upload only small files (skip > 500KB) to get fixes live fast."""
import json, urllib.request, os, base64, sys, time

SITE_DIR = r"C:\Users\朱庆宏\Desktop\暑期社会实践文件\website"
BASE = "https://api.github.com"

# Get token
TOKEN = None
with open(os.path.join(SITE_DIR, 'deploy-gh4.py'), 'r') as f:
    for line in f:
        if 'TOKEN' in line and '=' in line and '"' in line:
            TOKEN = line.split('"')[1]
            break

USER, REPO = "umi-0", "wenchuang-inn"

def api(method, path, data=None):
    url = BASE + path
    h = {"Authorization": "token "+TOKEN, "Accept": "application/vnd.github+json", "Content-Type": "application/json"}
    body = json.dumps(data).encode() if data else None
    for attempt in range(2):
        try:
            r = urllib.request.Request(url, data=body, headers=h, method=method)
            with urllib.request.urlopen(r, timeout=30) as resp:
                return json.loads(resp.read())
        except Exception as e:
            if attempt < 1: time.sleep(2)
            else: return {"error": str(e)}

# Step 1: Get base
print("1. Getting ref...")
ref = api("GET", f"/repos/{USER}/{REPO}/git/ref/heads/main")
base_sha = ref["object"]["sha"]
commit_obj = api("GET", f"/repos/{USER}/{REPO}/git/commits/{base_sha}")
base_tree = commit_obj["tree"]["sha"]
print(f"   Base: {base_sha[:8]}")

# Step 2: Upload only small critical files
print("2. Uploading core files...")
SKIP_DIRS = {'.git', '.netlify', '__pycache__'}
SKIP_FILES = {'.gitignore', 'gen_docx.py', 'deploy-gh4.py', 'deploy-all.py'}
MAX_SIZE = 500_000  # Only files under 500KB to keep it fast
tree_entries = []
ok = skip = fail = 0

CRITICAL = {'css/style.css', 'js/main.js', 'data/content.json', 'index.html', 'admin.html'}

for root, dirs, filenames in os.walk(SITE_DIR):
    dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
    for fname in filenames:
        if fname in SKIP_FILES: continue
        fpath = os.path.join(root, fname)
        fsize = os.path.getsize(fpath)
        rel = os.path.relpath(fpath, SITE_DIR).replace("\\", "/")

        if fsize > MAX_SIZE:
            skip += 1
            continue

        with open(fpath, "rb") as f:
            content = f.read()

        result = api("POST", f"/repos/{USER}/{REPO}/git/blobs", {
            "content": base64.b64encode(content).decode(), "encoding": "base64"
        })
        if "sha" in result:
            tree_entries.append({"path": rel, "mode": "100644", "type": "blob", "sha": result["sha"]})
            ok += 1
            marker = " <<<" if rel in CRITICAL else ""
            print(f"   OK {rel} ({fsize}B){marker}")
        else:
            fail += 1
            print(f"   FAIL {rel}")

print(f"   {ok} ok, {skip} skipped, {fail} fail")

# Step 3: Create tree
print(f"3. Creating tree ({len(tree_entries)} entries)...")
result = api("POST", f"/repos/{USER}/{REPO}/git/trees", {"base_tree": base_tree, "tree": tree_entries})
tree_sha = result.get("sha")
print(f"   Tree: {tree_sha}")

# Step 4: Create commit
print("4. Creating commit...")
result = api("POST", f"/repos/{USER}/{REPO}/git/commits", {
    "message": "Quick deploy: core fixes (CSS title, JS no-override, JSON complete)",
    "tree": tree_sha, "parents": [base_sha]
})
commit_sha = result.get("sha")
print(f"   Commit: {commit_sha}")

# Step 5: Update branch
print("5. Updating branch...")
api("PATCH", f"/repos/{USER}/{REPO}/git/refs/heads/main", {"sha": commit_sha, "force": True})

print(f"\n=== DONE === https://{USER}.github.io/{REPO}")
