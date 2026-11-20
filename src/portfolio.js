/*
 * ============================================================================
 *  个人作品集站点 · 内容配置文件（全站文案 90% 都在这里改）
 *  定位：WordPress 建站 + 技术型 SEO 独立顾问
 *  说明：所有链接、数据、微信/邮箱、报价均为示例占位内容，
 *        请按《README.md（替换与部署指南）》逐项替换成你的真实信息。
 * ============================================================================
 */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

/* ------------------------------- 开屏动画 ------------------------------- */

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1500
};

/* --------------------------- 首页：个人定位 ---------------------------- */

const illustration = {
  animated: true
};

const greeting = {
  username: "李明轩",
  title: "你好，我是李明轩",
  subTitle: emoji(
    "WordPress 建站 + 技术型 SEO 独立顾问。7 年里帮 40 多家中小企业把站点从「能打开」做到「能获客」：首屏加载从 4.8s 压到 1.6s，Google 收录页数翻 3 倍，核心词进首页平均 4.2 个月。我不只交付一个好看的网站，还交付一套能被搜索到、能被转化的站点结构。"
  ),
  // 留空则不显示「下载简历」按钮；如需展示，把链接换成你的 PDF/在线简历地址
  resumeLink: "",
  displayGreeting: true
};

/* --------------------------- 社交 / 联系方式 --------------------------- */

const socialMediaLinks = {
  github: "https://github.com/your-github",
  linkedin: "https://www.linkedin.com/in/your-linkedin/",
  gmail: "yourname@example.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

/* -------------------- 技能区（含技术栈标签 SoftwareSkill） -------------------- */

const skillsSection = {
  title: "我能交付什么",
  subTitle: "WORDPRESS 建站 × 技术型 SEO：从信息架构到 Core Web Vitals 全链路负责",
  skills: [
    emoji("⚡ WordPress 主题定制开发：基于 ACF + 自定义 post type 搭建可维护的内容模型，不堆插件"),
    emoji("⚡ 性能优化：LCP / CLS / INP 三项目标值达标，静态资源、缓存、图片与数据库逐层治理"),
    emoji("⚡ 技术 SEO：抓取预算、索引策略、结构化数据、hreflang、站点地图与内链权重分配"),
    emoji("⚡ 数据驱动：GA4 + Search Console + Ahrefs 全量留痕，每月交付可验证的增长报表")
  ],

  /* Font Awesome 5.15.4 图标类名，查图标：https://fontawesome.com/v5/search */
  softwareSkills: [
    {skillName: "WordPress", fontAwesomeClassname: "fab fa-wordpress"},
    {skillName: "WooCommerce", fontAwesomeClassname: "fas fa-shopping-cart"},
    {skillName: "PHP", fontAwesomeClassname: "fab fa-php"},
    {skillName: "MySQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "Sass", fontAwesomeClassname: "fab fa-sass"},
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "Nginx", fontAwesomeClassname: "fas fa-server"},
    {skillName: "Cloudflare", fontAwesomeClassname: "fas fa-cloud"},
    {skillName: "Google Analytics", fontAwesomeClassname: "fas fa-chart-line"},
    {skillName: "Search Console", fontAwesomeClassname: "fas fa-search"}
  ],
  // 技术栈标签（纯文字 chips，便于招聘方/客户快速扫读）
  tags: [
    "WordPress",
    "Elementor",
    "ACF Pro",
    "WooCommerce",
    "Astra / GeneratePress",
    "WP Rocket",
    "LiteSpeed Cache",
    "Schema.org",
    "Screaming Frog",
    "Ahrefs",
    "Semrush",
    "GA4",
    "GSC",
    "PageSpeed Insights",
    "Nginx",
    "Cloudflare CDN",
    "Git",
    "Figma"
  ],
  display: true
};

/* ------------------- 技术栈熟练度（顶部进度条，可关闭） ------------------- */

const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "WordPress 建站与主题开发", progressPercentage: "95%"},
    {Stack: "技术 SEO 与站点审计", progressPercentage: "90%"},
    {Stack: "性能优化（Core Web Vitals）", progressPercentage: "88%"},
    {Stack: "前端（HTML/CSS/JS/React）", progressPercentage: "80%"}
  ],
  displayCodersrank: false
};

/* ------------------------- 教育经历（默认隐藏） ------------------------- */

const educationInfo = {
  display: false,
  schools: []
};

/* ---------------------- 合作与服务经历（原工作经历） ---------------------- */

const workExperiences = {
  display: true,
  experience: [
    {
      role: "WordPress 建站与 SEO 顾问（独立执业）",
      company: "自由职业 / 远程交付",
      companylogo: require("./assets/images/codeInLogo.webp"),
      date: "2021 年 3 月 – 至今",
      desc: "为制造业、连锁零售、教育培训、跨境独立站客户提供「建站 + 技术 SEO + 持续运营」打包服务，累计交付 40+ 站点，其中 12 个站点核心词进入 Google 首页。",
      descBullets: [
        "建立标准化交付流程：需求梳理 → 信息架构 → 主题开发 → 上线压测 → 30 天数据观察",
        "主导 9 个站点的 Core Web Vitals 全绿改造，平均 LCP 下降 62%",
        "为客户搭建 GA4 + GSC + Looker Studio 看板，替代「凭感觉优化」"
      ]
    },
    {
      role: "前端开发 / SEO 负责人",
      company: "某跨境电商服务商",
      companylogo: require("./assets/images/nextuLogo.webp"),
      date: "2019 年 6 月 – 2021 年 2 月",
      desc: "负责 20+ 客户站点的前端重构与搜索表现提升，主导从 jQuery 主题到块编辑器（Gutenberg）体系的迁移。",
      descBullets: [
        "重构产品页模板，SPU 页面收录率从 61% 提升到 97%",
        "建立内容内链规则与面包屑结构化数据方案，全站点击深度下降 1.4 层"
      ]
    },
    {
      role: "Web 开发工程师",
      company: "某本地数字化服务公司",
      companylogo: require("./assets/images/saayaHealthLogo.webp"),
      date: "2017 年 7 月 – 2019 年 5 月",
      desc: "承接企业官网与商城项目，负责 WordPress 主题二次开发、支付/物流接口对接与运维部署。"
    }
  ]
};

/* ------------------- GitHub 板块（个人作品集无需展示，默认关闭） ------------------- */

const openSource = {
  showGithubProfile: "false",
  display: false
};

/* ---------------------------- 作品案例（核心） ---------------------------- */

const caseStudiesSection = {
  title: "作品案例：WordPress 站点改造前后",
  subtitle:
    "3 个典型改造项目的关键指标对比（数据为脱敏后的示例占位，替换为你自己的项目即可）",
  display: true,
  cases: [
    {
      icon: "fas fa-birthday-cake",
      name: "连锁烘焙品牌官网",
      tag: "企业展示站 · 12 家门店",
      summary:
        "原站基于 2016 年的老主题，装了 27 个插件，移动端首屏 6.2s 才出图。改造为轻量自定义主题 + 块编辑器内容模型，门店页与产品页全部结构化。",
      duration: "改造周期 5 周",
      metrics: [
        {label: "LCP 首屏加载", before: "4.9s", after: "1.6s", delta: "-67%"},
        {label: "移动端 PageSpeed", before: "31", after: "93", delta: "+62"},
        {label: "Google 收录页数", before: "86", after: "412", delta: "+379%"},
        {label: "自然搜索月点击", before: "1.2k", after: "8.6k", delta: "+617%"}
      ],
      bullets: [
        "插件从 27 个精简到 9 个，移除 3 个互相冲突的缓存插件",
        "WebP + 响应式图片 + 关键 CSS 内联，首屏请求数下降 58%",
        "为 12 家门店生成 LocalBusiness 结构化数据，进入本地包（Local Pack）"
      ],
      link: {name: "查看改版复盘", url: "#seo-audit"}
    },
    {
      icon: "fas fa-store",
      name: "家居用品 WooCommerce 商城",
      tag: "电商站 · 1,800 SKU",
      summary:
        "商品页存在大量参数化重复内容，Google 只收录了 1/3 的 SKU。重做 URL 规则与 canonical 策略，配合分类页内容化，收录与转化同步提升。",
      duration: "改造周期 7 周",
      metrics: [
        {label: "SKU 收录率", before: "34%", after: "96%", delta: "+62pt"},
        {label: "分类页平均排名", before: "38", after: "9", delta: "+29 位"},
        {label: "自然流量月会话", before: "9.4k", after: "27.1k", delta: "+188%"},
        {label: "加购转化率", before: "1.9%", after: "3.4%", delta: "+79%"}
      ],
      bullets: [
        "清理 1,100 个筛选参数 URL，统一 canonical 与 robots 策略",
        "为 Top 50 分类页补充选购指南与对比表，平均停留时长 +46%",
        "商品结构化数据（价格/库存/评分）全量上线，富媒体结果覆盖率 82%"
      ],
      link: {name: "查看 SEO 审计要点", url: "#seo-audit"}
    },
    {
      icon: "fas fa-graduation-cap",
      name: "K12 教育培训机构站群",
      tag: "多站点 · 主站 + 6 个校区站",
      summary:
        "7 个子站内容高度重叠，互相抢排名。重构为「主站聚合 + 校区站分工」结构，明确各站关键词职责，并统一技术规范。",
      duration: "改造周期 9 周",
      metrics: [
        {label: "站群关键词重叠率", before: "61%", after: "8%", delta: "-53pt"},
        {label: "Top10 关键词数量", before: "37", after: "214", delta: "+478%"},
        {label: "表单留资量 / 月", before: "58", after: "231", delta: "+298%"},
        {label: "CLS 布局偏移", before: "0.31", after: "0.02", delta: "-94%"}
      ],
      bullets: [
        "建立关键词地图，主站打品牌与品类词，校区站打「区域 + 课程」长尾词",
        "统一模板与内链规则，消除 6 组重复 title / H1 冲突",
        "接入 GSC 分组监控，按站点/校区双维度追踪收录与点击"
      ],
      link: {name: "查看审计报告样本", url: "#seo-audit"}
    }
  ]
};

/* --------------------------- SEO 审计报告展示区 --------------------------- */

const seoAuditSection = {
  title: "SEO 审计报告：把问题量化成清单",
  subtitle:
    "每个项目交付前都会做一次 120 项检查的全站审计，输出「问题—影响—修复—验证」四列表格，客户可以拿着它验收",
  display: true,
  reportMeta: {
    site: "demo-client.com（示例站点）",
    date: "2025 年 9 月 · 审计工具：Screaming Frog + GSC + PageSpeed Insights + Ahrefs",
    scope: "抓取 12,480 个 URL，抽样分析 1,200 个页面"
  },
  scoreCards: [
    {label: "技术 SEO 健康度", before: "42", after: "94", unit: "/100"},
    {label: "Core Web Vitals 通过率", before: "23%", after: "98%", delta: "移动端"},
    {label: "有效收录率", before: "56%", after: "97%", delta: "GSC 已编入索引"},
    {label: "结构化数据覆盖", before: "12%", after: "89%", delta: "页面占比"}
  ],
  issues: [
    {
      level: "严重",
      item: "分类页与筛选参数页重复内容",
      impact: "3,100+ 个 URL 争夺同一批关键词，抓取预算被大量消耗",
      fix: "参数页 noindex + canonical 归一，保留 8 个高价值筛选组合并生成静态落地页",
      status: "已修复"
    },
    {
      level: "严重",
      item: "移动端 LCP 依赖未压缩大图",
      impact: "首屏 4.9s，移动端跳出率 71%",
      fix: "WebP/AVIF 自适应图 + 懒加载首屏豁免 + CDN 边缘缓存",
      status: "已修复"
    },
    {
      level: "中等",
      item: "产品页缺少 Product 结构化数据",
      impact: "无法进入富媒体结果，点击率低于行业均值 2.1pt",
      fix: "模板层注入 Product/Offer/AggregateRating，并通过富媒体测试",
      status: "已修复"
    },
    {
      level: "中等",
      item: "内链集中于导航，正文几乎无站内跳转",
      impact: "深层页面平均点击深度 4.6 层，收录慢",
      fix: "建立「相关阅读 + 上下级导流」规则，自动生成 3-5 条上下文内链",
      status: "已修复"
    },
    {
      level: "轻微",
      item: "图片 alt 缺失与重复 H1",
      impact: "图片搜索流量缺失，语义结构不清晰",
      fix: "批量补齐 alt 规则，模板层强制唯一 H1",
      status: "持续监控"
    }
  ],
  artifacts: [
    {
      name: "审计报告样本（PDF · 脱敏）",
      desc: "28 页完整报告，含抓取概览、问题清单、修复优先级与验证方法",
      icon: "fas fa-file-pdf",
      url: "#contact"
    },
    {
      name: "改版前后数据看板（Looker Studio）",
      desc: "GA4 + GSC 双数据源，按周追踪收录、点击、转化",
      icon: "fas fa-chart-column",
      url: "#contact"
    }
  ]
};

/* ------------------------ WordPress 实机 Demo 入口 ------------------------ */

const wpDemoSection = {
  title: "WordPress 实机 Demo：先看再决定",
  subtitle:
    "下面是我维护的演示站点，前台可直接浏览，后台账号可登录体验内容模型与编辑器配置（演示数据每日重置）",
  display: true,
  demos: [
    {
      icon: "fab fa-wordpress",
      name: "企业展示站 Demo",
      desc: "自定义主题 + ACF 内容模型，含案例、服务、团队、博客四个内容类型，可直接对比「后台怎么填，前台怎么显示」。",
      url: "https://demo.example.com/corporate",
      adminUrl: "https://demo.example.com/corporate/wp-admin",
      account: "demo / demo1234",
      tags: ["Astra 子主题", "ACF Pro", "WP Rocket", "LiteSpeed"]
    },
    {
      icon: "fas fa-cart-shopping",
      name: "WooCommerce 商城 Demo",
      desc: "含商品筛选、购物车、结算与优惠券流程，重点演示商品结构化数据与分类页 SEO 配置。",
      url: "https://demo.example.com/shop",
      adminUrl: "https://demo.example.com/shop/wp-admin",
      account: "demo / demo1234",
      tags: ["WooCommerce", "Product Schema", "Redis 缓存", "CDN"]
    },
    {
      icon: "fas fa-gauge-high",
      name: "性能对比实验站",
      desc: "同一套内容分别用「原站配置」和「优化后配置」部署，可现场用 PageSpeed Insights 对比 LCP / CLS / INP。",
      url: "https://demo.example.com/perf",
      adminUrl: "",
      account: "",
      tags: ["Core Web Vitals", "Critical CSS", "AVIF", "Cloudflare"]
    }
  ]
};

/* ------------------------------ 服务报价区 ------------------------------ */

const pricingSection = {
  title: "服务报价",
  subtitle: "按交付物定价，不按小时计费；报价含税，支持对公转账与分阶段付款",
  display: true,
  plans: [
    {
      name: "轻量建站",
      price: "¥6,800 起",
      cycle: "交付周期 2-3 周",
      desc: "适合 5 页以内的品牌展示站，先把「能打开、能被收录」做好。",
      features: [
        "WordPress 部署 + 主题定制（≤5 页）",
        "移动端适配与基础性能优化",
        "基础 SEO 配置（TDK / 站点地图 / robots）",
        "GA4 + Search Console 接入",
        "上线后 30 天免费 bug 修复"
      ],
      highlight: false
    },
    {
      name: "建站 + 技术 SEO（推荐）",
      price: "¥18,800 起",
      cycle: "交付周期 4-6 周",
      desc: "从信息架构到技术审计一次做完，适合要靠自然搜索获客的中小企业。",
      features: [
        "自定义主题开发 + ACF 内容模型",
        "120 项全站 SEO 审计与修复清单",
        "Core Web Vitals 三项全绿优化",
        "结构化数据全量部署",
        "关键词地图与内链规则搭建",
        "3 个月数据跟踪与月度报告"
      ],
      highlight: true
    },
    {
      name: "增长陪跑",
      price: "¥6,800 / 月",
      cycle: "按月付费，3 个月起",
      desc: "已有站点但流量见顶，需要持续做内容与技术的迭代优化。",
      features: [
        "每月 1 次全站技术审计",
        "内容选题与内链优化建议（8 篇/月）",
        "性能与收录异常响应（48 小时内）",
        "GA4 / Looker Studio 看板维护",
        "季度策略复盘会（线上）"
      ],
      highlight: false
    }
  ],
  addons: [
    {name: "单次技术 SEO 审计报告", price: "¥2,800", note: "28 页报告 + 1 次线上讲解"},
    {name: "网站迁移 / 换服务器", price: "¥1,500 起", note: "含 DNS、SSL、收录保持方案"},
    {name: "多语言站（WPML / Polylang）", price: "¥4,500 起", note: "含 hreflang 配置"},
    {name: "Landing Page 单页定制", price: "¥2,200 / 页", note: "含 A/B 版本结构建议"}
  ],
  notes: [
    "以上为示例报价，请替换为你自己的价格体系",
    "不含第三方费用：域名、服务器、付费插件与 API 消耗",
    "支持先做 1 个页面试点，验收满意后再全量合作"
  ]
};

/* ---------------------- 技术文章（用 BlogCard 已有组件） ---------------------- */

const blogSection = {
  title: "技术笔记",
  subtitle: "把项目里踩过的坑写成可复用的方法，也是我判断问题的底层逻辑",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://example.com/blog/wordpress-core-web-vitals",
      title: "WordPress 站点 LCP 从 4.9s 到 1.6s：我按这 7 步做",
      description:
        "从服务器响应、关键 CSS、图片格式到插件冲突，逐层定位首屏瓶颈，附每一步的验证方法。"
    },
    {
      url: "https://example.com/blog/woocommerce-index",
      title: "WooCommerce 商品页收录率只有 34%？先查这 5 个索引陷阱",
      description:
        "参数化 URL、canonical 误用、分页策略、库存状态与 sitemap 分片，是电商站最常见的收录黑洞。"
    },
    {
      url: "https://example.com/blog/schema-guide",
      title: "结构化数据不是加分项，是默认项：WordPress 落地方案",
      description:
        "用模板层统一注入 Organization、Product、FAQ、Breadcrumb，避免插件各写一套导致冲突。"
    }
  ],
  display: true
};

/* --------------------- 以下板块个人作品集默认关闭（保留配置） --------------------- */

const bigProjects = {
  title: "合作品牌",
  subtitle: "",
  projects: [],
  display: false
};

const achievementSection = {
  title: emoji("资质与认证 🏆"),
  subtitle: "",
  achievementsCards: [],
  display: false
};

const talkSection = {
  title: "分享",
  subtitle: "",
  talks: [],
  display: false
};

const podcastSection = {
  title: "播客",
  subtitle: "",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "简历",
  subtitle: "",
  display: false
};

const contactInfo = {
  title: emoji("聊聊你的项目 ☎️"),
  subtitle:
    "无论是新站从 0 搭建，还是老站流量见顶，都可以先发我域名，我免费做一次 15 分钟的诊断；通常 24 小时内回复。",
  number: "+86 138-0000-0000",
  email_address: "yourname@example.com"
};

const twitterDetails = {
  userName: "your_twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  caseStudiesSection,
  seoAuditSection,
  wpDemoSection,
  pricingSection
};
