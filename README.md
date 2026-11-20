---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: cf93d2ba4252e3fc820ac383cb09c649_927766ece2fd11f1913b525400393706
    ReservedCode1: P5eXhIgeSnw2iNKHqKch3eUbBOX+3/SaNNU9riZeKoq0X3JfwkngyPpEbp1RzyWqqDwYIlxraHlXswDSs/Uhh7bIK1SmxXZhgUn3U/Zw+3OalDA7Y74QxJnzAkwBVUdS0ZA3h6NVnHz62O7XPPFNT3VuMca2taBaZQ+cv3kski6YWsOkF5xHNOASMyI=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: cf93d2ba4252e3fc820ac383cb09c649_927766ece2fd11f1913b525400393706
    ReservedCode2: P5eXhIgeSnw2iNKHqKch3eUbBOX+3/SaNNU9riZeKoq0X3JfwkngyPpEbp1RzyWqqDwYIlxraHlXswDSs/Uhh7bIK1SmxXZhgUn3U/Zw+3OalDA7Y74QxJnzAkwBVUdS0ZA3h6NVnHz62O7XPPFNT3VuMca2taBaZQ+cv3kski6YWsOkF5xHNOASMyI=
---

# WordPress 建站 + 技术型 SEO 个人作品集

基于 GitHub 开源热门项目 [developerFolio](https://github.com/saadpasta/developerFolio)（React + Create React App + SCSS，1.3 万+ Star，MIT 协议）二次改造的中文单页作品集，用于向潜在客户展示 **WordPress 建站能力 + 技术型 SEO 能力** 并承接项目。

改造后不止有「自我介绍 + 项目列表」，而是补齐了接活最需要的 5 个板块：

| 板块 | 作用 | 源码位置 |
| --- | --- | --- |
| 首页个人定位 | 3 秒说清你是谁、解决什么问题、结果数字 | `src/containers/greeting/Greeting.js` |
| 作品案例（改造前后对比） | 每个案例给「优化前 → 优化后 → 变化幅度」四项指标 | `src/containers/caseStudies/` |
| SEO 审计报告展示 | 4 项健康度评分 + 问题清单（严重度/影响/修复/状态） | `src/containers/seoAudit/` |
| WordPress 实机 Demo 入口 | 前台 + 后台演示账号，把「嘴上说会」变成「你点开看」 | `src/containers/wpDemo/` |
| 技术栈标签 + 服务报价 | 技术栈芯片墙、3 档套餐 + 单项服务加购 | `src/containers/skills/`、`src/containers/pricing/` |

> 全站文案、案例数据、审计数据、Demo 链接、报价 **全部集中在 `src/portfolio.js` 一个文件**，改这一个文件就能把站点变成你自己的。本文所有价格、域名、邮箱、账号均为示例占位，上线前必须替换。

---

## 一、五分钟跑起来

前置：Node.js ≥ 16（推荐 18 / 20 / 22），npm ≥ 8。本机未装 git 不影响，源码已是完整的文件夹。

```bash
# 1. 进入项目目录
cd developerfolio-portfolio

# 2. 安装依赖（React 16 生态存在 peer 依赖告警，必须加 --legacy-peer-deps）
npm install --legacy-peer-deps

# 3. 本地开发，浏览器打开 http://localhost:3000
npm start

# 4. 生产构建，产物在 build/ 目录
npm run build
```

> 目录里已包含安装好的 `node_modules/`，网络不畅时可直接 `npm start` 跳过第 2 步。
> 只验证产物可先执行 `npm run build`，再 `npx serve -s build`（或任意静态服务器）打开。
> `npm start` / `npm run build` 会自动先执行 `node fetch.js`：该脚本只在 `.env` 里 `USE_GITHUB_DATA="true"` 时才请求 GitHub 接口，默认什么也不做，不会报错。

---

## 二、内容替换清单（按顺序改，30 分钟搞定）

所有内容都在 **`src/portfolio.js`**。下面按这个文件里的段落顺序列出要改什么：

| 段落 | 需要替换的内容 | 说明 |
| --- | --- | --- |
| `greeting` | `username`、`title`、`subTitle`、`resumeLink` | 首屏定位。`subTitle` 建议保持「身份 + 服务对象 + 3 个可验证数字」结构。`resumeLink` 留空则不显示简历按钮 |
| `socialMediaLinks` | `github`、`linkedin`、`gmail`、`gitlab`、`facebook`、`instagram`、`twitter`、`medium`、`stackoverflow` | 不用的平台留空字符串即可，图标会自动隐藏 |
| `skillsSection` | `title`、`subTitle`、`skills`（4 条能力描述）、`softwareSkills`（图标 + 名称）、`tags`（技术栈芯片） | `softwareSkills` 用 Font Awesome 5 类名，如 `fab fa-wordpress`，查图标去 fontawesome.com/v5/search |
| `techStack` | `experience` 里的 `Stack` 与 `progressPercentage` | 技能熟练度进度条，`viewSkillBars: true` 才显示 |
| `workExperiences` | `role`、`company`、`companylogo`、`date`、`desc`、`descBullets` | 合作/工作经历。`companylogo` 用 `require("./assets/images/xxx.webp")` 引用本地图 |
| `caseStudiesSection` | `cases[]` 每个案例的 `name`、`tag`、`summary`、`duration`、`metrics[4]`（`before`/`after`/`delta`/`label`）、`bullets[]`、`link` | **接活核心区块。** 指标建议固定四项：首屏 LCP、Google 收录页数、核心词排名、自然流量或询盘数。没有真实数据时先用示例数据，务必标注真实采集口径（PSI / GSC / Ahrefs） |
| `seoAuditSection` | `reportMeta`（站点、周期、样本、执行人）、`scoreCards[4]`（`name`/`before`/`after`/`note`）、`issues[]`（`level`/`item`/`impact`/`fix`/`status`）、`artifacts[]` | 审计报告展示区。`level` 填「严重 / 中等 / 建议」，样式自动分色。`artifacts[].url` 建议指向公开的 PDF 报告或在线看板，形成可点击的证据链 |
| `wpDemoSection` | `demos[]` 的 `url`、`adminUrl`、`account`、`tags` | **一定要替换成你真能打开的站点**，否则客户点开 404 会直接失信。没有独立演示站时可指向自己主站或测试站，并写清账号 |
| `pricingSection` | `plans[3]`（`name`/`price`/`cycle`/`desc`/`features`/`highlight`）、`addons[]`、`notes[]` | 报价区。`highlight: true` 的那档会加紫框和「最常被选择」角标 |
| `blogSection` | `title`、`subtitle`、`blogs[]`（`url`/`title`/`description`） | 技术笔记。目前是静态卡片，`displayMediumBlogs: "false"` 表示不用 Medium 接口；想接 Medium 时改成 `"true"` 并在 `.env` 配 `MEDIUM_USERNAME` |
| `contactInfo` | `title`、`subtitle`、`number`、`email_address` | 联系区。邮箱同时用于页脚，建议与 `socialMediaLinks.gmail` 一致 |
| `splashScreen` | `enabled`、`duration` | 开屏动画。不想要就设 `enabled: false` |
| `isHireable` | `true` / `false` | 预留字段，当前页脚未强依赖 |

已内置但默认关闭的板块（`display: false`，需要时打开）：`educationInfo`（教育经历）、`bigProjects`（合作品牌）、`achievementSection`（资质认证）、`talkSection`（分享）、`podcastSection`（播客）、`twitterDetails`（推特时间线）。

---

## 三、新增四大板块的数据结构（改内容时对照用）

### 1. 案例对比 `caseStudiesSection.cases[]`

```js
{
  icon: "fas fa-bolt",                       // Font Awesome 图标类名
  name: "连锁教育机构官网重做",
  tag: "WordPress · 12 页 · 行业：教育培训",
  summary: "老站用 3 个页面构建器拼出来，插件 41 个，LCP 4.9s。",
  duration: "2025.03 – 2025.05（8 周）",
  metrics: [
    {label: "首屏 LCP", before: "4.9s", after: "1.6s", delta: "-67%"},  // 固定 4 项，2×2 排布
    ...
  ],
  bullets: ["第一条做对了什么", "第二条", "第三条"],   // 建议 3 条
  link: "#seo-audit"                          // 可指向报告、线上站或留空
}
```

### 2. SEO 审计 `seoAuditSection`

```js
reportMeta: [{label: "审计站点", value: "xxx.com"}, ...],       // 键值对，横向排布
scoreCards: [{name: "技术 SEO 健康度", before: 41, after: 92, note: "120 项检查，修复 78 项"}, ...],
issues: [{level: "严重", item: "商品筛选页生成 2.4 万个参数 URL", impact: "...", fix: "...", status: "已修复"}, ...],
artifacts: [{name: "审计报告 PDF", desc: "28 页", icon: "fas fa-file-lines", url: "#contact"}, ...]
```

### 3. Demo `wpDemoSection.demos[]`

```js
{
  icon: "fab fa-wordpress",
  name: "企业展示站 Demo",
  desc: "后台怎么填，前台怎么显示",
  url: "https://demo.example.com/corporate",        // 前台
  adminUrl: "https://demo.example.com/corporate/wp-admin", // 后台，留空则只显示前台按钮
  account: "demo / demo1234",                        // 留空则不显示账号行
  tags: ["Astra 子主题", "ACF Pro"]
}
```

### 4. 报价 `pricingSection`

```js
plans: [{name, price, cycle, desc, features: [], highlight: false}, ...],  // 建议 3 档
addons: [{name, price, note}, ...],                                       // 单项服务
notes: ["备注 1", "备注 2"]                                                // 合同免责 / 付款方式
```

---

## 四、图片、图标与品牌资源替换

| 资源 | 位置 | 说明 |
| --- | --- | --- |
| 站点图标 | `public/favicon.ico`、`favicon-16x16.png`、`favicon-32x32.png`、`apple-touch-icon.png`、`safari-pinned-tab.svg` | 换成自己的 logo，保持同名替换即可，无需改代码 |
| 首屏插画 | `src/assets/lottie/landingPerson` | 默认 Lottie 动画；想换自绘插画：把 `illustration.animated` 设为 `false`，替换 `src/assets/images/manOnTable.svg` |
| 联系区插画 | `src/assets/images/contactMailDark.svg` | 同上，`illustration.animated: false` 时生效 |
| 经历公司 logo | `src/assets/images/*.webp` | 在 `workExperiences[].companylogo` 里 require 引用，正方形图效果最好 |
| 技术栈图标 | `skillsSection.softwareSkills[].fontAwesomeClassname` | 走 CDN 的 Font Awesome 5.15.4，无需本地文件 |
| 分享封面图 | `public/og-cover.png`（需自建，1200×630） | 建好后在 `public/index.html` 里取消 `og:image` 注释 |

---

## 五、上线前的 SEO 配置（这一节别跳，它本身就是你的能力证明）

`public/index.html` 里已内置，逐项替换：

1. **`<html lang="zh-CN">`** —— 已设置，中文站点必须。
2. **`<title>`** —— 建议格式：`姓名 | 核心服务 · 作品集`，控制在 30 个汉字内。
3. **`meta description`** —— 已写好 120 字左右的卖点 + 数字，替换姓名与数字即可。
4. **`link rel="canonical"`** —— 把 `https://your-domain.com/` 换成真实域名（必须带协议，结尾带 `/`）。
5. **`og:*` / `twitter:*`** —— 微信、飞书、X 分享卡片靠它，换成真实域名，并上传 1200×630 封面图。
6. **JSON-LD 结构化数据** —— 已内置 `Person` + `ProfessionalService`（含 `hasOfferCatalog` 三档服务）。替换 `name`、`email`、`sameAs`、`priceRange` 后，用 [Rich Results Test](https://search.google.com/test/rich-results) 验证无报错。
7. **`public/robots.txt`** —— 替换 `Sitemap:` 域名；已屏蔽 `profile.json`、`blogs.json` 这类数据接口，避免被当内容页收录。
8. **`public/sitemap.xml`** —— 替换域名与 `lastmod`；单页站点只保留首页一条即可。
9. **Google Analytics** —— 原模板自带 `UA-135618960-2` 统计脚本，已**移除**。自己接入 GA4 时把 gtag 片段加到 `index.html` 的 `</head>` 前。
10. **部署后立刻做**：GSC + 百度站长提交 sitemap、提交首页抓取、跑一次 PageSpeed Insights 截图存档（正好可以放进「作品案例」当第一条真实案例）。

性能提示：构建产物体积约 234 KB gzip（JS），首屏 Lottie 会额外加载动画 JSON。若客户在意 LCP，把 `splashScreen.enabled` 设为 `false`、`illustration.animated` 设为 `false`，首屏能再快一截。

---

## 六、部署上线（4 种方式，按需选一种）

### 方式 A：Vercel（最快，推荐）

1. 把整个 `developerfolio-portfolio` 目录（不含 `node_modules`、`build`）推到 GitHub 仓库；
2. Vercel → Import Project → 选择仓库；
3. Framework 选 **Create React App**，Build Command `npm run build`，Output Directory `build`；
4. 部署完成后在 Settings → Domains 绑定自己的域名，按提示配置 DNS（A 记录或 CNAME）。

### 方式 B：Netlify

1. 拖拽整个项目目录（或连 GitHub 仓库）；
2. Build command：`npm run build`；Publish directory：`build`；
3. 在 `netlify.toml` 里可加 `[[redirects]] from="/*" to="/index.html" status=200`（单页应用兜底）。

### 方式 C：GitHub Pages（免费，但要注意子路径）

1. 把 `package.json` 的 `"homepage": "."` 改成 `"homepage": "https://<用户名>.github.io/<仓库名>"`；
2. 执行 `npm run build`，把 `build/` 目录内容推到 `gh-pages` 分支；
3. 仓库 Settings → Pages → Source 选 `gh-pages` 分支根目录。

> 当前 `homepage` 是 `"."`（相对路径），好处是构建产物可以直接双击 `build/index.html` 打开预览，也能挂在任意子路径下；一旦发现资源 404，先检查这个字段。

### 方式 D：国内云服务器 + Nginx（面向国内客户建议用这个，访问速度决定第一印象）

```bash
# 服务器上
npm install --legacy-peer-deps
npm run build          # 产物在 build/
cp -r build/* /var/www/portfolio/
```

Nginx 配置要点（单页应用必须做 history 兜底 + 静态资源缓存）：

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/portfolio;
    index index.html;

    # SPA 路由兜底
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 带 hash 的静态资源长缓存
    location /static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 文本压缩（配合 LCP 优化）
    gzip on;
    gzip_types text/css application/javascript application/json image/svg+xml;

    # HTTPS 用 certbot 一行签发：certbot --nginx -d your-domain.com
}
```

---

## 七、常见问题

**1. `npm install` 报 `ERESOLVE unable to resolve dependency tree`**
React 16 与部分依赖的 peer 声明不兼容，加参数即可：`npm install --legacy-peer-deps`（已在本指南所有命令中体现）。

**2. 页面能打开但全是白屏 / 样式错乱**
多半是 `package.json` 的 `homepage` 与实际部署路径不一致，导致 `/static/...` 绝对路径 404。本地预览用 `"."`，部署到子路径改成完整 URL 后再重新 `npm run build`。

**3. 想换成深色为默认**
`src/containers/Main.js` 里 `useLocalStorage("isDark", darkPref.matches)`，把第二个参数直接改成 `true`。

**4. 首屏动画每次都播，客户嫌慢**
`src/portfolio.js` 里 `splashScreen: {enabled: false}`。

**5. 想加第 4、5 个案例**
直接往 `caseStudiesSection.cases` 里追加对象即可，网格是 `auto-fit`，会自动换行，最多建议放 6 个（再多客户看不完，挑最强的 3–6 个）。

**6. 换完内容后界面错位**
通常是 `metrics` 不是 4 项、或某个 `plans` 少了 `features` 字段。保持结构一致就不会崩。

**7. 字体图标显示成方框**
`index.html` 里引的是 jsDelivr 上的 Font Awesome 5.15.4，若企业网络屏蔽 CDN，把该 CSS 下载到 `public/` 并改成本地引用。

---

## 八、上线自检清单

- [ ] `portfolio.js` 里所有 `example.com`、`your-github`、`yourname@example.com`、`138-0000-0000`、`demo.example.com` 已全部替换
- [ ] Demo 链接在手机 4G 网络下能打开，后台账号能登录
- [ ] 案例里的每个数字都能说清采集工具与时间（LCP 用 PageSpeed Insights / 收录用 Search Console / 排名用 Ahrefs）
- [ ] `index.html` 的 canonical、og、JSON-LD 域名均与线上域名一致
- [ ] `robots.txt`、`sitemap.xml` 域名已改，且 `https://域名/sitemap.xml` 可访问
- [ ] 手机端（375px 宽）通读一遍：导航菜单能展开、表格能横向滑动、报价卡片单列显示
- [ ] 深色模式开关正常，刷新后主题保持
- [ ] GSC 已提交 sitemap，首页已请求收录；上线一周后回看覆盖率报告
- [ ] 换掉 `public/favicon*` 为自己的 logo，浏览器标签页不再是模板图标

---

## 九、项目结构速查

```
developerfolio-portfolio/
├─ public/                     # 静态资源与 SEO 文件（index.html / robots.txt / sitemap.xml / 图标）
├─ src/
│  ├─ portfolio.js             # ★ 全站内容配置，改这一个文件
│  ├─ containers/
│  │  ├─ greeting/             # 首页定位
│  │  ├─ caseStudies/          # ★ 新增：作品案例对比
│  │  ├─ seoAudit/             # ★ 新增：SEO 审计报告
│  │  ├─ wpDemo/               # ★ 新增：WordPress 实机 Demo
│  │  ├─ pricing/              # ★ 新增：服务报价
│  │  ├─ skills/               # 能力描述 + 技术栈芯片
│  │  ├─ skillProgress/        # 技能熟练度进度条
│  │  ├─ workExperience/       # 合作与服务经历
│  │  ├─ blogs/                # 技术笔记
│  │  ├─ contact/              # 联系区
│  │  └─ Main.js               # ★ 板块顺序在这里调整
│  ├─ components/              # header / footer / 卡片 / 按钮等通用组件
│  ├─ assets/                  # lottie 动画、图片、字体
│  └─ App.js
├─ fetch.js                    # 构建前的可选数据抓取脚本（默认不请求）
├─ package.json
└─ README-upstream-developerFolio.md   # 原项目英文 README（上游文档）
```

调整板块顺序：改 `src/containers/Main.js` 里的组件排列；调整顶部导航：改 `src/components/header/Header.js`（导航项文本与显隐都在这里，跟随各板块 `display` 开关）。

---

## 十、许可与致谢

- 本项目基于 [saadpasta/developerFolio](https://github.com/saadpasta/developerFolio) 二次开发，遵循 **MIT License**，可商用、可修改，保留原作者版权声明即可。
- 字体图标：Font Awesome 5.15.4（CC BY 4.0 / SIL OFL / MIT）。
- 站点内所有数据、账号、报价均为示例占位，不代表真实业绩，正式对外前请替换为可验证的真实数据。
*（内容由AI生成，仅供参考）*
