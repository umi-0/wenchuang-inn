# 🏠 文创客栈 — 官方资源站

「数智文创，献礼物电」暑期社会实践活动 · 一站式素材资源网站。

## 📂 目录结构

```
website/
├── index.html           ← 公开首页
├── css/style.css        ← 样式表
├── js/main.js           ← 渲染引擎（读取 content.json）
├── data/content.json    ← 所有内容数据（← 管理端编辑的就是这个文件）
├── files/               ← 可下载文件（模板、素材等）
├── images/              ← 网站图片素材
├── admin/
│   └── index.html       ← 本地管理后台（双击打开）
└── README.md
```

## 🚀 部署到 GitHub Pages

### 首次部署

1. 在 GitHub 新建仓库，名称任意（如 `wenchuang-inn`），设为 **Public**
2. 在仓库 Settings → Pages → Source 选择 `main` 分支，目录选 `/ (root)`
3. 打开终端，进入本目录，执行：

```bash
cd website/
git init
git add .
git commit -m "🎉 文创客栈官网首次发布"
git branch -M main
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

4. 等待 1-2 分钟，访问 `https://你的用户名.github.io/仓库名/`

### 更新内容

**方法一：通过管理端（推荐）**
1. 双击打开 `admin/index.html`
2. 输入管理密码，修改内容
3. 点击「📤 导出 content.json」
4. 将导出的 `content.json` 替换 `data/content.json`
5. 在终端执行：
```bash
git add data/content.json
git commit -m "更新内容"
git push
```

**方法二：直接编辑文件**
- 用文本编辑器打开 `data/content.json`，按格式修改
- 或向 `files/` 目录放入新的可下载文件
- 修改后 git add → commit → push

### 添加可下载文件

将文件放入 `files/` 目录，然后在管理端或 content.json 中将 `downloadUrl` 设为 `files/你的文件名`。

> ⚠️ **大文件注意**：GitHub 限制单文件 ≤100MB，PS 安装包等大文件请传到百度网盘/阿里云盘，在 `externalUrl` 中填写网盘链接。

## 🔒 管理密码

默认密码：`wenchuang2026`

修改方式：编辑 `admin/index.html`，找到 `const ADMIN_PASSWORD = 'wenchuang2026';` 这行，修改引号内的密码。

## 🎨 内容区说明

| 区域 | content.json 字段 | 卡片类型 |
|------|-------------------|----------|
| 🛠 软件区 | `sections.software.cards` | software / alternative / ai_tool |
| 📖 教程区 | `sections.tutorials.cards` | tutorial / video |
| 🎨 素材区 | `sections.materials.cards` | material / official / material_site / reference |
| 📄 模板区 | `sections.templates.cards` | template |

每张卡片支持：图标、标题、描述、标签、下载链接、外部链接、详细信息。
