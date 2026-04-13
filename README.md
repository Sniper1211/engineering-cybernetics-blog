# 工程控制论学习笔记博客

基于钱学森《工程控制论》的系统学习笔记与AI进化应用博客。

## 🎯 项目概述

这是一个将学习过程工程化、可视化、可访问化的创新项目：

- **学习记录**：系统学习钱学森《工程控制论》18章内容
- **思考沉淀**：记录理论理解、深度思考、创新应用
- **AI进化探索**：探索控制论在AI助手进化中的应用
- **技术实践**：使用现代Web技术栈构建学习博客

## 🚀 技术栈

- **前端框架**：Next.js 14 (App Router)
- **样式**：Tailwind CSS + shadcn/ui
- **内容管理**：Contentlayer (Markdown/MDX)
- **部署**：Vercel (自动部署)
- **版本控制**：GitHub
- **类型安全**：TypeScript

## 📁 项目结构

```
engineering-cybernetics-blog/
├── src/
│   ├── app/                    # Next.js App Router页面
│   │   ├── (pages)/           # 主要页面
│   │   ├── chapters/          # 章节页面
│   │   ├── notes/             # 学习笔记页面
│   │   └── applications/      # 应用案例页面
│   ├── components/            # 可复用组件
│   ├── lib/                   # 工具函数
│   └── styles/                # 样式文件
├── content/                   # Markdown内容
│   ├── chapters/              # 各章节学习笔记
│   ├── notes/                 # 其他学习笔记
│   └── applications/          # AI进化应用案例
├── public/                    # 静态资源
└── 配置文件
```

## 🛠️ 开发设置

### 环境要求
- Node.js 18+
- npm/yarn/pnpm

### 安装依赖
```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发运行
```bash
npm run dev
# 访问 http://localhost:3000
```

### 构建生产版本
```bash
npm run build
npm start
```

## 📝 内容管理

### 添加新章节
1. 在 `content/chapters/` 创建 `.mdx` 文件
2. 使用Front Matter定义元数据：
```yaml
---
title: "章节标题"
chapterNumber: 1
date: "2026-04-13"
summary: "章节摘要"
status: "completed" # planned, in-progress, completed
tags: ["控制论", "线性系统"]
coverImage: "/images/chapter-1.jpg"
---
```

### 添加学习笔记
1. 在 `content/notes/` 创建 `.mdx` 文件
2. 使用Front Matter定义元数据：
```yaml
---
title: "笔记标题"
date: "2026-04-13"
type: "theory" # theory, application, reflection, summary
tags: ["概念", "思考"]
relatedChapter: 1
---
```

### 添加应用案例
1. 在 `content/applications/` 创建 `.mdx` 文件
2. 使用Front Matter定义元数据：
```yaml
---
title: "应用案例标题"
date: "2026-04-13"
category: "ai-evolution" # ai-evolution, system-design, practical-case
difficulty: "intermediate" # beginner, intermediate, advanced
tags: ["AI进化", "控制论应用"]
---
```

## 🎨 设计系统

### 颜色主题
- **主色**：`#2563eb` (科技蓝)
- **辅助色**：`#7c3aed` (智慧紫)
- **强调色**：`#059669` (成长绿)
- **深色**：`#1e293b` (专业深蓝灰)
- **浅色**：`#f8fafc` (背景浅灰)

### 字体
- **主要字体**：Inter (系统字体备用)
- **衬线字体**：Georgia (用于强调)
- **等宽字体**：JetBrains Mono (代码)

### 响应式设计
- 移动端优先设计
- 断点：sm:640px, md:768px, lg:1024px, xl:1280px
- 组件自适应布局

## 🔧 功能特性

### 已完成功能
- ✅ 响应式布局 (移动端优先)
- ✅ 深色/浅色主题切换
- ✅ Markdown/MDX内容渲染
- ✅ 章节导航系统
- ✅ 学习进度展示
- ✅ SEO优化配置
- ✅ 代码语法高亮

### 计划功能
- 🔄 全文搜索功能
- 🔄 学习时间线展示
- 🔄 知识图谱可视化
- 🔄 评论互动系统
- 🔄 学习进度统计
- 🔄 多语言支持

## 📊 学习内容规划

### 《工程控制论》18章学习
1. 第一章：引言 - 线性系统与非线性系统
2. 第二章：拉氏变换法
3. 第五章：不互相影响的控制
4. 第六章：交流伺服系统与振荡控制伺服系统
5. 第七章：采样伺服系统
6. 第九章：平稳随机输入下的线性系统
7. 第十二章：变系数线性系统
8. 第十三章：利用摄动理论的控制设计
9. 第十四章：满足指定积分条件的控制设计
10. 第十五章：自动寻求最优运转点的控制系统
11. 第十六章：噪声过滤的设计原理
12. 第十七章：自行镇定和适应环境的系统
13. 第十八章：误差的控制

### AI进化应用方向
1. AI助手控制系统建模
2. 基于反馈的进化机制
3. 自适应学习算法设计
4. 最优进化策略探索
5. 自主改进系统构建

## 🚀 部署

### Vercel部署
1. 将仓库推送到GitHub
2. 在Vercel导入GitHub仓库
3. 配置构建设置：
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. 部署完成，自动分配 `*.vercel.app` 域名

### 自定义域名
1. 在Vercel项目设置中添加自定义域名
2. 配置DNS记录指向Vercel
3. 等待SSL证书自动签发

## 🤝 贡献

欢迎通过以下方式参与：
1. **内容建议**：提出学习方向或应用思路
2. **技术改进**：提交代码改进或新功能
3. **问题反馈**：报告bug或使用问题
4. **文档完善**：改进文档或添加示例

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件。

## 📞 联系

- **GitHub**: [Sniper1211](https://github.com/Sniper1211)
- **项目地址**: [engineering-cybernetics-blog](https://github.com/Sniper1211/engineering-cybernetics-blog)
- **在线访问**: [engineering-cybernetics-blog.vercel.app](https://engineering-cybernetics-blog.vercel.app)

## 🙏 致谢

- 钱学森先生及其著作《工程控制论》
- 所有控制论和AI领域的研究者
- 开源社区提供的优秀工具和资源

---

**开始基于控制论的AI进化探索之旅！**