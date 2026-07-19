/* ============================================
   文创客栈 · 主脚本
   数据内嵌，本地和线上均可用
   ============================================ */

(function () {
  'use strict';

  // ====== 数据（与 data/content.json 同步） ======
  var siteData = {"site":{"name":"文创客栈","tagline":"「数智文创，献礼物电」暑期社会实践活动 · 官方资源站","description":"设计软件、零基础教程、官方素材、提交模板 — 一站式配齐，助你高效出稿"},"announcement":{"deadlines":[{"date":"7月20日","event":"第一轮审核节点——建议至少提交初稿"},{"date":"7月30日","event":"第二轮审核节点"},{"date":"8月10日 23:00","event":"最终截止（以邮件送达时间为准）"}],"email":"1279203601@qq.com","maxWorks":2,"productTypes":[{"name":"A4 文件夹","size":"A4（210mm × 297mm），双面设计","icon":"📁"},{"name":"帆布包","size":"约 220mm × 180mm，单面或双面","icon":"🛍️"},{"name":"徽章 / 胸针","size":"直径或边长 20–40mm","icon":"🏅"},{"name":"金属钥匙扣","size":"约 30–50mm，双面图案","icon":"🔑"},{"name":"校园卡套","size":"85.5mm × 54mm（标准卡尺寸）","icon":"🪪"},{"name":"其他小型文创","size":"书签、贴纸、胶带等，投稿时注明类型与尺寸","icon":"✨"}],"aiPolicy":"我们鼓励使用 AI 作为辅助工具，但 AI 不能成为一次性生成器。\n\n✅ 正确用法：AI 出草图 / 生成局部素材 → 导入 PS → 人工修改、调色、重组图层\n❌ 错误用法：AI 一键出图直接交稿\n\n判断标准很简单：打开你的 PSD，里面能看到你手动操作过的图层，能说清楚你改了什么。做不到这两点的，视为不合规。\n\n违规后果：取消参评资格，记为未完成实践。"},"sections":{"software":{"title":"🛠 软件区","description":"设计软件下载与安装指引","cards":[{"id":"ps","icon":"🖼️","title":"Adobe Photoshop（推荐）","type":"software","description":"图像编辑、图层合成、效果处理——本次活动主力工具。支持完整的 PSD 图层管理。","tags":["推荐","主力"],"details":"获取方式：Adobe 官网下载 Creative Cloud，可试用 7 天；或通过学校正版软件平台获取。\n版本要求：CS6 及以上均可，推荐 CC 2019+\n学校正版软件平台入口：[待填入]","externalUrl":"https://www.adobe.com/cn/products/photoshop.html","downloadUrl":""},{"id":"gimp","icon":"🖌️","title":"GIMP","type":"alternative","description":"开源图像编辑器，功能接近 PS，完全免费。需安装插件才可导出 PSD。","tags":["免费","替代"],"details":"开源免费，跨平台（Windows / Mac / Linux）\n支持图层、蒙版、滤镜等核心功能\nPSD 导出需安装插件（gimp-psd-plugin）","externalUrl":"https://www.gimp.org/","downloadUrl":"https://www.gimp.org/downloads/"},{"id":"krita","icon":"🎨","title":"Krita","type":"alternative","description":"开源绘画软件，图层功能完善，界面友好。支持 PSD 导出。","tags":["免费","替代"],"details":"开源免费，以绘画功能见长\n图层管理功能完善\n原生支持 PSD 格式导出","externalUrl":"https://krita.org/","downloadUrl":"https://krita.org/en/download/"},{"id":"photopea","icon":"🌐","title":"Photopea","type":"alternative","description":"浏览器在线使用，界面与 PS 高度相似，无需安装。支持在线导出 PSD。","tags":["免费","在线","替代"],"details":"完全在线，打开浏览器即可使用\n界面与 Photoshop 高度相似，上手快\n支持在线导出 PSD 格式","externalUrl":"https://www.photopea.com/","downloadUrl":""},{"id":"illustrator","icon":"✏️","title":"Adobe Illustrator","type":"software","description":"矢量图形设计软件，做 Logo、徽章、图标的必备工具。与 PS 配合使用效果最佳。","tags":["推荐","矢量"],"details":"矢量格式，无限缩放不失真\n特别适合徽章、钥匙扣等需要精确线条的产品\n可与 PS 联动：AI 画矢量 → PS 做效果","externalUrl":"https://www.adobe.com/cn/products/illustrator.html","downloadUrl":""},{"id":"indesign","icon":"📰","title":"Adobe InDesign","type":"software","description":"专业排版软件。如果你做文件夹、书签等多页或多版面设计，InDesign 比 PS 更好用。","tags":["排版"],"details":"专业排版工具，适合多页/多版面设计\n做文件夹展开图时比 PS 更方便\n可输出印刷厂直接用的 PDF","externalUrl":"https://www.adobe.com/cn/products/indesign.html","downloadUrl":""},{"id":"lightroom","icon":"📷","title":"Adobe Lightroom","type":"software","description":"照片调色和管理工具。如果你用自己拍的照片做素材，Lightroom 能快速调出理想色调。","tags":["照片","调色"],"details":"照片调色专用工具\n批量处理照片效率高\n调好的照片可导入 PS 继续设计","externalUrl":"https://www.adobe.com/cn/products/photoshop-lightroom.html","downloadUrl":""},{"id":"csp","icon":"🎨","title":"Clip Studio Paint","type":"software","description":"漫画/插画神器，手绘感极佳。支持 PSD 导出，适合想要手绘风格文创设计的同学。","tags":["推荐","手绘"],"details":"业界标准的漫画/插画软件\n笔触自然，适合手绘风格设计\n支持 PSD 格式导出\n有免费试用版","externalUrl":"https://www.clipstudio.net/","downloadUrl":""},{"id":"canva","icon":"📐","title":"Canva 可画","type":"alternative","description":"在线设计平台，模板丰富，适合快速出排版方案。不支持 PSD 导出，仅作辅助用。","tags":["免费","辅助"],"details":"在线平台，模板丰富\n适合快速出排版方案和灵感参考\n⚠️ 不支持 PSD 导出，不能作为主力工具","externalUrl":"https://www.canva.cn/","downloadUrl":""},{"id":"midjourney","icon":"🤖","title":"Midjourney","type":"ai_tool","description":"AI 图像生成工具，出图质量高。需注册 Discord 使用，付费。","tags":["AI工具","付费"],"details":"通过 Discord 使用\n出图质量在 AI 工具中属于第一梯队\n适合生成设计灵感和局部素材","externalUrl":"https://www.midjourney.com/","downloadUrl":""},{"id":"tongyi","icon":"🤖","title":"通义万相","type":"ai_tool","description":"阿里出品，国内免费使用，访问便捷。","tags":["AI工具","免费","国内"],"details":"阿里云出品，国内可直接访问\n免费使用额度充足\n支持文生图、图生图等多种模式","externalUrl":"https://tongyi.aliyun.com/","downloadUrl":""},{"id":"yige","icon":"🤖","title":"文心一格","type":"ai_tool","description":"百度出品，国内免费使用。","tags":["AI工具","免费","国内"],"details":"百度出品，国内可直接访问\n免费使用\n支持多种风格和尺寸","externalUrl":"https://yige.baidu.com/","downloadUrl":""},{"id":"liblib","icon":"🤖","title":"LiblibAI","type":"ai_tool","description":"国内 AI 绘画平台，模型丰富，社区活跃。","tags":["AI工具","国内"],"details":"国内平台，模型种类丰富\n社区活跃，可参考他人作品和 prompt\n支持多种模型切换","externalUrl":"https://www.liblib.art/","downloadUrl":""},{"id":"sd","icon":"🤖","title":"Stable Diffusion","type":"ai_tool","description":"免费开源 AI 绘图，可控性最强。可本地部署或使用在线版。","tags":["AI工具","免费","开源"],"details":"免费开源，可控性最强\n可本地部署（需要较好显卡）\n也可使用在线托管版本\n支持 ControlNet 等高精度控制","externalUrl":"https://stability.ai/","downloadUrl":""}]},"tutorials":{"title":"📖 教程区","description":"从零开始学设计，按难度分级","cards":[{"id":"ps-interface","icon":"🖥️","title":"PS 界面与基础操作","type":"tutorial","description":"认识工具栏、图层面板、画布操作。零基础第一步，约 15 分钟。","tags":["零基础","入门"],"externalUrl":"https://search.bilibili.com/all?keyword=PS%E5%9F%BA%E7%A1%80%E6%93%8D%E4%BD%9C%E5%85%A5%E9%97%A8","downloadUrl":""},{"id":"layers","icon":"📚","title":"图层是什么？","type":"tutorial","description":"理解图层的概念——设计最核心的基础知识。约 10 分钟。","tags":["零基础","核心"],"externalUrl":"https://search.bilibili.com/all?keyword=PS%E5%9B%BE%E5%B1%82%E6%95%99%E7%A8%8B","downloadUrl":""},{"id":"selection","icon":"✂️","title":"选区与抠图","type":"tutorial","description":"快速选择、魔棒、钢笔工具——把想要的元素精准取出来。约 15 分钟。","tags":["零基础","实用"],"externalUrl":"https://search.bilibili.com/all?keyword=PS%E6%8A%A0%E5%9B%BE%E6%95%99%E7%A8%8B","downloadUrl":""},{"id":"text","icon":"🔤","title":"文字工具与排版","type":"tutorial","description":"添加文字、选择字体、调整排版。文创设计中文字处理必不可少。约 10 分钟。","tags":["零基础","实用"],"externalUrl":"https://search.bilibili.com/all?keyword=PS%E6%96%87%E5%AD%97%E6%8E%92%E7%89%88%E6%95%99%E7%A8%8B","downloadUrl":""},{"id":"color","icon":"🎨","title":"颜色调整","type":"tutorial","description":"色相/饱和度、曲线、色彩平衡——让画面颜色更好看。约 10 分钟。","tags":["零基础","实用"],"externalUrl":"https://search.bilibili.com/all?keyword=PS%E8%B0%83%E8%89%B2%E6%95%99%E7%A8%8B","downloadUrl":""},{"id":"export","icon":"📤","title":"导出文件","type":"tutorial","description":"如何正确导出 JPG / PNG / PSD——提交格式的关键一步。约 5 分钟。","tags":["零基础","必看"],"externalUrl":"https://search.bilibili.com/all?keyword=PS%E5%AF%BC%E5%87%BA%E6%A0%BC%E5%BC%8F%E8%AE%BE%E7%BD%AE","downloadUrl":""},{"id":"prompt","icon":"💬","title":"AI Prompt 工程入门","type":"tutorial","description":"怎么写提示词才能让 AI 生成想要的图？掌握 prompt 的基本结构和技巧。","tags":["AI","进阶"],"externalUrl":"","downloadUrl":""},{"id":"ai-to-ps","icon":"🔄","title":"AI 出图 → PS 修改工作流","type":"tutorial","description":"从 AI 生成草图到 PSD 成品输出的完整链路，手把手教你合规使用 AI。","tags":["AI","必看"],"externalUrl":"","downloadUrl":""},{"id":"color-theory","icon":"🌈","title":"配色入门","type":"tutorial","description":"主色 / 辅色 / 点缀色怎么选？掌握基本的配色方法。","tags":["设计基础"],"externalUrl":"","downloadUrl":""},{"id":"layout","icon":"📐","title":"排版四原则","type":"tutorial","description":"对齐、对比、重复、亲密性——让版面看起来专业的秘诀。","tags":["设计基础"],"externalUrl":"","downloadUrl":""},{"id":"product-design","icon":"🛍️","title":"文创产品设计要点","type":"tutorial","description":"不同载体（帆布袋 / 徽章 / 卡套 / 文件夹）的设计差异和注意事项。","tags":["设计基础","实用"],"externalUrl":"","downloadUrl":""}]},"materials":{"title":"🎨 素材区","description":"官方素材包 + 优质外部资源推荐","cards":[{"id":"official-pack","icon":"🏛️","title":"官方素材包（必用）","type":"official","description":"院徽标准文件（AI/SVG/PNG），必须从本站下载。不得自行从网络获取——存在版本不一致风险。","tags":["官方","必用","必下载"],"details":"官方素材包中包含：\n• 院徽标准色版本（AI 矢量格式）\n• 院徽单色版本（SVG/PNG）\n• 院训标准字文件\n• 使用规范说明\n\n⚠️ 院徽结构、颜色不得修改。","downloadUrl":"","externalUrl":"pages/official-materials.html"},{"id":"campus-photos","icon":"📸","title":"学院建筑摄影","type":"material","description":"校园建筑高清照片，可作为设计背景或元素使用。","tags":["摄影","素材"],"downloadUrl":"","externalUrl":"pages/materials.html#photos"},{"id":"symbols","icon":"⚡","title":"学科符号矢量图","type":"material","description":"电路图、方程式、原子结构等学科特色 SVG/AI 文件。","tags":["矢量","学科"],"downloadUrl":"","externalUrl":"pages/materials.html#symbols"},{"id":"color-scheme","icon":"🎨","title":"配色方案参考","type":"material","description":"学院主题色 + 多套推荐配色组合，可直接取色使用。","tags":["配色","参考"],"downloadUrl":"","externalUrl":"pages/materials.html#colors"},{"id":"fonts","icon":"🔤","title":"字体推荐清单","type":"material","description":"免费可商用的中英文字体列表，附下载链接。","tags":["字体","免费"],"downloadUrl":"","externalUrl":"pages/materials.html#fonts"},{"id":"patterns","icon":"🏮","title":"推荐参考资源","type":"material","description":"精选免费可商用纹样、纹理、图标素材网站推荐。含中国传统纹样参考、现代几何图案、底纹边框等装饰资源入口。","tags":["纹样","推荐","参考"],"downloadUrl":"","externalUrl":"pages/materials.html"},{"id":"archive","icon":"📂","title":"过往设计案例（申请制）","type":"reference","description":"往届学长学姐的文创设计源文件原件（PSD/AI等）。仅供学习参考，下载需提交申请备案，不可直接下载。","tags":["往届作品","申请下载","源文件"],"details":"⚠️ 本区不直接对外开放下载。\n\n所有源文件均为往届学长学姐授权分享的原件。\n下载前需提交申请备案（姓名、学号、班级、用途）。\n\n🚫 严禁直接复制、二次传播、商业用途。","downloadUrl":"","externalUrl":"pages/archive.html"},{"id":"cases","icon":"💡","title":"优秀案例参考","type":"reference","description":"往届及同类文创设计参考，仅供启发思路，禁止直接复制。点击浏览图文和视频案例。","tags":["参考","灵感"],"downloadUrl":"","externalUrl":"pages/materials.html"},{"id":"unsplash","icon":"🌐","title":"Unsplash","type":"material_site","description":"免费高清摄影图片网站，质量极高，可商用。","tags":["推荐","免费","外部"],"externalUrl":"https://unsplash.com/","downloadUrl":""},{"id":"pixabay","icon":"🌐","title":"Pixabay","type":"material_site","description":"图片 + 矢量 + 视频素材，免费可商用。","tags":["免费","外部"],"externalUrl":"https://pixabay.com/","downloadUrl":""},{"id":"flaticon","icon":"🌐","title":"Flaticon","type":"material_site","description":"海量图标资源，注意查看授权范围。","tags":["图标","外部"],"externalUrl":"https://www.flaticon.com/","downloadUrl":""},{"id":"100font","icon":"🌐","title":"100font 字体网","type":"material_site","description":"免费可商用字体汇总，中文设计必备。","tags":["字体","推荐","免费","外部"],"externalUrl":"https://www.100font.com/","downloadUrl":""}]},"templates":{"title":"📄 模板区","description":"下载模板，填空即可提交","cards":[{"id":"design-doc","icon":"📝","title":"文创设计投稿文件包","type":"template","description":"面向零基础的统一提交模板。含基本信息、产品类型（可多选）、工艺偏好、设计理念、使用元素、AI说明、自查清单、修改记录。","tags":["模板","必交"],"details":"模板包含 7 个 Part：\n1. 基本信息\n2. 产品类型（6选多）+ 工艺偏好\n3. 设计理念（≥150 字）\n4. 使用元素清单\n5. AI 工具使用说明\n6. 提交前自查（含生产可行性检查）\n7. 修改记录（打回后填写）\n\n⚠️ 面向零基础，每项都有解释。复制到 Word 填写。","downloadUrl":"files/【提交模板】文创设计投稿文件包.docx","externalUrl":"pages/materials.html#photos"},{"id":"naming-guide","icon":"📋","title":"文件命名与打包说明","type":"template","description":"手把手教你命名文件、打包压缩、写邮件。含正确和错误示范对照，避免格式错误被退回。","tags":["模板","必看"],"details":"核心规范：\n• 三个文件统一命名：专业班级+姓名+学号\n• 压缩包命名：专业班级+姓名+学号.zip\n• 邮件主题：【文创投稿】专业班级+姓名+学号\n• 收件人：1279203601@qq.com","downloadUrl":"files/【提交模板】文件命名与打包说明.docx","externalUrl":"pages/materials.html#symbols"},{"id":"checklist","icon":"✅","title":"提交前自查清单","type":"template","description":"8 大类逐项检查：文件完整性、命名、效果图、PSD图层、生产可行性、设计说明、邮件、红线。面向零基础，每项有解释。","tags":["模板","必用"],"details":"八大检查项：\n📁 文件完整性\n📝 命名规范\n🖼 效果图\n🧩 PSD 源文件\n🏭 生产可行性（线条粗细、安全边距、颜色数等）\n📝 设计说明\n✉️ 邮件\n🚫 红线\n\n全部打勾才能发邮件！","downloadUrl":"files/【提交模板】提交前自查清单.docx","externalUrl":"pages/materials.html#colors"}]}},"roadmap":["软件区 → 下载安装 Photoshop（或免费替代软件）","教程区 → 看「PS 零基础 30 分钟入门」","素材区 → 下载官方素材包（院徽等必备元素）","教程区 → 看「AI 绘图辅助设计指南」","模板区 → 下载提交模板，了解最终要交什么","开始创作！✨"]};

  // ====== 页面使用内嵌权威数据直接渲染，不再异步加载 content.json 覆盖 ====
  // content.json 仅用于管理员后台编辑；主页依赖内嵌 siteData 保证 100% 稳定
  renderAll();

  // ====== DOM 引用 ======
  var $ = function(sel) { return document.querySelector(sel); };
  var $$ = function(sel) { return document.querySelectorAll(sel); };

  var menuToggle = $('#menuToggle');
  var mainNav = $('#mainNav');
  var modalOverlay = $('#modalOverlay');
  var modalContent = $('#modalContent');
  var modalClose = $('#modalClose');

  // ====== 渲染所有区域 ======
  function renderAll() {
    if (!siteData) return;
    renderAnnouncement();
    renderSection('software', 'softwareGrid');
    renderSection('tutorials', 'tutorialsGrid');
    renderSection('materials', 'materialsGrid');
    renderSection('templates', 'templatesGrid');
    renderRoadmap();
  }

  // ====== 渲染公告区 ======
  function renderAnnouncement() {
    var grid = $('#announcementGrid');
    if (!grid || !siteData.announcement) return;

    var ann = siteData.announcement;
    var cards = [];

    if (ann.deadlines && ann.deadlines.length > 0) {
      var dlHtml = ann.deadlines.map(function(d) {
        return '<li><span class="deadline-date">📅 ' + esc(d.date) + '</span><span class="deadline-event">' + esc(d.event) + '</span></li>';
      }).join('');
      cards.push('<div class="announce-card"><div class="card-icon">⏰</div><h3>关键时间节点</h3><ul class="deadline-list">' + dlHtml + '</ul></div>');
    }

    // 可选产品类型
    if (ann.productTypes && ann.productTypes.length > 0) {
      var ptHtml = ann.productTypes.map(function(p) {
        return '<tr><td>' + esc(p.icon || '') + '</td><td><b>' + esc(p.name) + '</b></td><td>' + esc(p.size) + '</td></tr>';
      }).join('');
      var maxHint = ann.maxWorks ? '<p style="margin-top:8px;font-weight:700;color:var(--red);">📌 每人最多投稿 <b>' + ann.maxWorks + ' 件</b>（可选不同品类或同一品类不同设计）</p>' : '';
      cards.push('<div class="announce-card"><div class="card-icon">🛍️</div><h3>可选设计类型（6+N 选 2）</h3><table style="width:100%;border-collapse:collapse;font-size:0.82rem;"><thead><tr style="background:#F5F2EB;"><th></th><th style="text-align:left;padding:5px 8px;">产品类型</th><th style="text-align:left;padding:5px 8px;">参考尺寸</th></tr></thead><tbody>' + ptHtml + '</tbody></table>' + maxHint + '<p class="note">💡 新手建议：帆布包和校园卡套图案面积大、限制少，最容易上手</p></div>');
    }

    cards.push('<div class="announce-card"><div class="card-icon">📧</div><h3>提交方式</h3><p style="margin-bottom:8px;color:var(--text-secondary);">邮件主题：<code>【文创投稿】专业班级+姓名+学号</code></p><p style="margin-bottom:8px;color:var(--text-secondary);">三件套：效果图 + PSD源文件 + 设计说明</p><p>投稿邮箱：<span class="email-display">' + esc(ann.email || '1279203601@qq.com') + '</span></p><p style="margin-top:12px;font-size:0.85rem;color:var(--text-muted);">每人最多 2 件 · 被退回可无限次修改重投</p></div>');

    cards.push('<div class="announce-card"><div class="card-icon">⚠️</div><h3>AI 使用底线</h3><div class="policy-text">' + esc(ann.aiPolicy || '鼓励使用 AI 作为辅助工具，但禁止 AI 一键出图直接交稿。') + '</div><p style="margin-top:10px;font-size:0.85rem;color:var(--red);font-weight:600;">判断标准：PSD 中能看到人工操作的图层痕迹</p></div>');

    // 评分标准
    cards.push('<div class="announce-card"><div class="card-icon">⭐</div><h3>优秀作品评选标准</h3><div style="font-size:0.88rem;color:var(--text-secondary);line-height:1.9;">'+
      '<b>设计创意性（40%）</b>：构思新颖，有独特的视觉表达<br>'+
      '<b>设计完成度（30%）</b>：画面精美，色彩协调<br>'+
      '<b>实用可行性（20%）</b>：符合工艺要求，可落地<br>'+
      '<b>设计说明质量（10%）</b>：描述完整，如实说明<br>'+
      '<span style="color:var(--red);font-weight:600;">优秀作品≤8份，获综测加分+实物奖品</span></div></div>');

    // 学分认定
    cards.push('<div class="announce-card"><div class="card-icon">📋</div><h3>学分与奖励认定</h3><div style="font-size:0.85rem;color:var(--text-secondary);line-height:1.9;">'+
      '<table style="width:100%;border-collapse:collapse;font-size:0.82rem;"><tr style="background:#F5F2EB;"><th style="padding:6px 8px;border:1px solid #E0D5C5;">结果</th><th style="padding:6px 8px;border:1px solid #E0D5C5;">PU学分</th><th style="padding:6px 8px;border:1px solid #E0D5C5;">志愿时长</th><th style="padding:6px 8px;border:1px solid #E0D5C5;">综测加分</th></tr>'+
      '<tr><td style="padding:5px 8px;border:1px solid #E0D5C5;">✅ 合格</td><td style="padding:5px 8px;border:1px solid #E0D5C5;">全额</td><td style="padding:5px 8px;border:1px solid #E0D5C5;">全额</td><td style="padding:5px 8px;border:1px solid #E0D5C5;">按规定</td></tr>'+
      '<tr style="background:#FFF8F0;"><td style="padding:5px 8px;border:1px solid #E0D5C5;">🔶 部分完成</td><td style="padding:5px 8px;border:1px solid #E0D5C5;">减半</td><td style="padding:5px 8px;border:1px solid #E0D5C5;">减半</td><td style="padding:5px 8px;border:1px solid #E0D5C5;">减半</td></tr>'+
      '<tr><td style="padding:5px 8px;border:1px solid #E0D5C5;">⭐ 优秀作品</td><td style="padding:5px 8px;border:1px solid #E0D5C5;">全额</td><td style="padding:5px 8px;border:1px solid #E0D5C5;">全额</td><td style="padding:5px 8px;border:1px solid #E0D5C5;">加分+奖品</td></tr>'+
      '<tr><td style="padding:5px 8px;border:1px solid #E0D5C5;">❌ 未提交</td><td style="padding:5px 8px;border:1px solid #E0D5C5;">0</td><td style="padding:5px 8px;border:1px solid #E0D5C5;">0</td><td style="padding:5px 8px;border:1px solid #E0D5C5;">0</td></tr></table>'+
      '<p style="margin-top:8px;font-size:0.78rem;">🔶 部分完成 = 交了但缺文件/内容偏离/AI使用不当/打回2次，仍可得一半学分</p></div></div>');

    // 前3张放主网格，后2张放副网格（3+2布局）
    var mainCards = cards.slice(0, 3);
    var spreadCards = cards.slice(3);
    var mainHtml = mainCards.join('');
    if (spreadCards.length > 0) {
      grid.innerHTML = mainHtml;
      // 在公告区后面插入一个副网格
      var spreadGrid = document.getElementById('announcementSpread');
      if (!spreadGrid) {
        spreadGrid = document.createElement('div');
        spreadGrid.id = 'announcementSpread';
        spreadGrid.className = 'announcement-grid spread';
        grid.parentNode.insertBefore(spreadGrid, grid.nextSibling);
      }
      spreadGrid.innerHTML = spreadCards.join('');
    }
  }

  // ====== 渲染通用卡片区 ======
  function renderSection(sectionKey, gridId) {
    var grid = document.getElementById(gridId);
    if (!grid || !siteData.sections || !siteData.sections[sectionKey]) return;

    var section = siteData.sections[sectionKey];
    var cards = section.cards || [];

    grid.innerHTML = cards.map(function(card, index) {
      return renderCard(card, sectionKey, index);
    }).join('');

    grid.querySelectorAll('.card').forEach(function(cardEl) {
      cardEl.addEventListener('click', function(e) {
        if (e.target.closest('a, button')) return;
        var cardId = this.dataset.cardId;
        var secKey = this.dataset.section;
        openModal(secKey, cardId);
      });
    });
  }

  // ====== 渲染单张卡片 ======
  function renderCard(card, sectionKey, index) {
    var typeLabel = getTypeLabel(card.type || sectionKey);
    var tags = (card.tags || []).map(function(t) {
      return '<span class="tag ' + getTagClass(t) + '">' + esc(t) + '</span>';
    }).join('');

    var actions = [];
    if (card.downloadUrl) {
      actions.push('<a href="' + esc(card.downloadUrl) + '" class="btn btn-sm btn-download" target="_blank" rel="noopener">📥 下载</a>');
    }
    if (card.externalUrl) {
      actions.push('<a href="' + esc(card.externalUrl) + '" class="btn btn-sm btn-external" target="_blank" rel="noopener">🔗 访问</a>');
    }

    return '<div class="card" data-section="' + esc(sectionKey) + '" data-card-id="' + esc(card.id || index) + '">' +
      '<div class="card-header">' +
        '<span class="card-icon">' + esc(card.icon || '📌') + '</span>' +
        '<div class="card-title-area">' +
          '<h3 class="card-title">' + esc(card.title) + '</h3>' +
          '<span class="card-type">' + typeLabel + '</span>' +
        '</div>' +
      '</div>' +
      '<p class="card-desc">' + esc(card.description || '') + '</p>' +
      (tags ? '<div class="card-tags">' + tags + '</div>' : '') +
      (actions.length ? '<div class="card-actions">' + actions.join('') + '</div>' : '') +
    '</div>';
  }

  // ====== 渲染路线图 ======
  function renderRoadmap() {
    var container = document.getElementById('roadmapSteps');  // may be null
    if (!container) container = $('#roadmapSteps');
    if (!container || !siteData.roadmap) return;

    // 步骤对应的锚点
    var anchors = ['#software', '#tutorials', '#materials', '#tutorials', '#templates', '#home'];

    var steps = siteData.roadmap || [];
    container.innerHTML = steps.map(function(step, i) {
      var link = anchors[i] || '#home';
      return '<a href="' + link + '" class="roadmap-step" style="text-decoration:none;cursor:pointer;">' +
        '<span class="step-num">' + (i + 1) + '</span>' +
        '<span class="step-text">' + esc(step) + '</span>' +
        (i < steps.length - 1 ? '<span class="step-arrow">→</span>' : '') +
      '</a>';
    }).join('');
  }

  // ====== 弹窗详情 ======
  function openModal(sectionKey, cardId) {
    if (!siteData || !siteData.sections || !siteData.sections[sectionKey]) return;
    var section = siteData.sections[sectionKey];
    var card = (section.cards || []).filter(function(c) { return (c.id || '') === cardId; })[0];
    if (!card) return;

    var typeLabel = getTypeLabel(card.type || sectionKey);
    var tags = (card.tags || []).map(function(t) {
      return '<span class="tag ' + getTagClass(t) + '">' + esc(t) + '</span>';
    }).join('');

    var actions = [];
    if (card.downloadUrl) {
      actions.push('<a href="' + esc(card.downloadUrl) + '" class="btn btn-sm btn-download" target="_blank" rel="noopener">📥 下载</a>');
    }
    if (card.externalUrl) {
      actions.push('<a href="' + esc(card.externalUrl) + '" class="btn btn-sm btn-external" target="_blank" rel="noopener">🔗 访问链接</a>');
    }

    modalContent.innerHTML =
      '<h3>' + esc(card.icon || '📌') + ' ' + esc(card.title) + '</h3>' +
      '<div class="modal-type">' + typeLabel + '</div>' +
      '<div class="modal-desc">' + esc(card.description || '') + '</div>' +
      (card.details ? '<div class="modal-details"><h4>📋 详细信息</h4><div>' + esc(card.details).replace(/\n/g, '<br>') + '</div></div>' : '') +
      (tags ? '<div class="card-tags">' + tags + '</div>' : '') +
      (actions.length ? '<div class="modal-actions">' + actions.join('') + '</div>' : '');

    modalOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  // ====== 工具函数 ======
  function esc(str) {
    if (!str) return '';
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function getTypeLabel(type) {
    var map = {
      software: '设计软件', ai_tool: 'AI 工具', alternative: '免费替代',
      tutorial: '教程', video: '视频教程',
      material: '设计素材', official: '官方素材', material_site: '素材网站', reference: '参考案例',
      template: '提交模板'
    };
    return map[type] || type || '';
  }

  function getTagClass(tag) {
    var t = tag.toLowerCase();
    if (t.indexOf('推荐') !== -1 || t.indexOf('主力') !== -1) return 'tag-recommend';
    if (t.indexOf('官方') !== -1 || t.indexOf('必用') !== -1) return 'tag-official';
    if (t.indexOf('免费') !== -1 || t.indexOf('替代') !== -1) return 'tag-tool';
    if (t.indexOf('教程') !== -1 || t.indexOf('入门') !== -1) return 'tag-tutorial';
    if (t.indexOf('素材') !== -1 || t.indexOf('参考') !== -1) return 'tag-material';
    if (t.indexOf('模板') !== -1 || t.indexOf('提交') !== -1) return 'tag-template';
    return 'tag-tool';
  }

  // ====== 事件绑定（添加 null 安全检查，兼容不同页面） ======
  if (menuToggle) {
    menuToggle.addEventListener('click', function() { mainNav.classList.toggle('open'); });
  }

  if (mainNav) {
    var navLinks = mainNav.querySelectorAll('a');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function() { mainNav.classList.remove('open'); });
    }
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) { if (e.target === modalOverlay) closeModal(); });
  }
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

})();
