const path = require("path");
const beian = "粤ICP备2022065970号-1";
const config = {
  baseUrl: "/",
  favicon: "img/favicon.ico",
  headTags: [
    {
      attributes: {
        name: "description",
        content: "慧科云是企业数字化解决方案服务商",
      },
      tagName: "meta",
    },
  ],
  i18n: {
    defaultLocale: "zh-CN",
    localeConfigs: {
      en: {
        htmlLang: "en-US",
      },
    }, // 站点上部署的区域设置列表
    locales: [
      "en",
      "zh-CN",
    ],
    path: "i18n", // 所有区域设置文件夹都相对于的根文件夹
  },
  plugins: [
    /*"docusaurus-plugin-matomo", // Matomo 统计插件，用于跟踪网站的访问量和用户行为等数据。*/
    "docusaurus-plugin-image-zoom", // 图片放大插件，可以在鼠标移动到图片上时自动放大显示。
    "docusaurus-plugin-sass", // Sass 插件，用于处理 Sass 样式文件。
    path.resolve(__dirname, "./src/plugin/plugin-baidu-tongji"), // 自定义百度统计插件，用于将网站的访问量和用户行为等数据发送给百度统计。
    path.resolve(__dirname, "./src/plugin/plugin-baidu-push"), // 自定义百度推送插件，用于将网站的 URL 提交给百度搜索引擎进行索引。
    [
      path.resolve(__dirname, "./src/plugin/plugin-content-blog"),
      {
        blogDescription: "慧科云博客",
        blogSidebarCount: 10,
        blogSidebarTitle: "最近更新",
        editLocalizedFiles: false,
        feedOptions: {
          type: "all",
          title: "慧科云",
          copyright: `Copyright © ${new Date().getFullYear()} 慧科云 Built with Docusaurus.<p><a href="https://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
        path: "blog",
        postsPerPage: 10,
        readingTime: ({
                        content,
                        defaultReadingTime
                      }) => defaultReadingTime({
                                                 content,
                                                 options: {wordsPerMinute: 100}
                                               }),
        routeBasePath: "blog",
        showReadingTime: true,
      },
    ], // 自定义博客插件，用于展示网站的博客文章。
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 80, // 图片质量设置，取值范围是 1 到 100，默认值是 70。
        max: 1200, // 最大宽度，超过此宽度的图片将被缩小。默认值是 1030。
        min: 640, // 最小宽度，低于此宽度的图片将被放大。默认值是 640。
        steps: 2, // 缩放步数，表示有多少个宽度的值应该被使用。例如，如果此值为 2，则会创建三个版本的图片（最小，中等和最大）。默认值是 2。
        disableInDev: false, // 是否在开发模式下禁用插件。
      },
    ], // 图片优化插件，可以根据设备和网络情况选择最优的图片尺寸和质量进行加载,显示为 WebP 格式的图片。
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true, // 是否在控制台输出调试信息。
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ], // 定义了 PWA 应在何种情况下进入离线模式。
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/logo.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(51 139 255)",
          },
        ], // 包含添加到站点的元数据
      },
    ], // PWA 插件，用于将网站转化为 Progressive Web App，可以离线访问和添加到主屏幕等功能。
  ], // 插件配置列表
  presets: [
    [
      "@docusaurus/preset-classic", // Docusaurus 预设插件，用于设置网站主题和其他配置项。
      ({
        theme: {
          customCss: [require.resolve("./src/scss/custom.scss")], // 自定义样式表文件路径，可以用于覆盖默认主题样式或添加额外的样式。
        },
        docs: {
          breadcrumbs: true, // 是否在页面顶部显示面包屑导航。
          docItemComponent: '@theme/DocItem', // 文档页面渲染组件。
          docLayoutComponent: '@theme/DocPage', // 文档页面布局组件。
          path: 'docs', // 文档的路径。
          routeBasePath: 'docs', // 文档的路由基础路径。
          showLastUpdateAuthor: true, // 是否显示最后一次更新文档的作者。
          showLastUpdateTime: true,  // 是否显示最后一次更新文档的时间。
          sidebarPath: require.resolve('./sidebars.js'), // 侧边栏配置文件路径。
          remarkPlugins: [], // Markdown 处理过程中使用的插件集合
          rehypePlugins: [], // Markdown 处理过程中使用的插件集合
          // Use the latest version of @docusaurus/mdx-loader
          mdxLoaderOptions: {
            remarkPlugins: [
              import('remark-slug'), // 自动添加 slug
            ], // Markdown 处理过程中使用的插件集合
            rehypePlugins: [
              import('rehype-autolink-headings'), // 自动为标题添加锚点
            ], // Markdown 处理过程中使用的插件集合
          }, // 用于配置 Docusaurus 内置的 @docusaurus/mdx-loader 加载器的选项
        }, // 一组文档插件的配置
        blog: false, // 是否启用博客插件。
        sitemap: {
          changefreq: 'weekly', // 网站地图更新频率
          filename: 'sitemap.xml', // 网站地图文件名。
          ignorePatterns: ['/tags/**'], // 哪些 URL 应该被忽略。
          priority: 0.5, // 网站地图页面优先级。
        }, // 一组网站地图插件的配置
      }),
    ],
  ], // 使用预设
  tagline: "企业数字化解决方案服务商",
  themeConfig: {
    image: "img/logo.svg",
    metadata: [
      {
        name: "keywords",
        content: "慧科云CMS, 帮助文档, 内容管理系统",
      },
      {
        name: "description",
        content: "慧科云内容管理系统的帮助文档",
      },
    ],  // 用于指定站点的元数据，包括关键词和描述信息。
    docs: {
      sidebar: {
        hideable: true, // 可隐藏侧边栏
        autoCollapseCategories: true, // 自动折叠侧边栏类别
      }, // 指定了文档页面的侧边栏配置
    }, // 配置文档页面的侧边栏
    navbar: {
      title: "慧科云", // 导航栏的标题
      logo: {
        alt: "慧科云", // 徽标图像的 Alt 标记。
        src: "img/logo.svg", // 浅色模式下徽标图像的网址
        srcDark: "img/logo.svg", // 在深色模式下使用的备用图像 URL
      }, // 徽标对象的自定义
      hideOnScroll: true,
      items: [
        {
          label: "云市场",
          position: "left",
          items: [
            {
              label: "应用插件",
              to: "https://cms.13aq.com/cloud/app-plugin.html",
            },
            {
              label: "功能组件",
              to: "https://cms.13aq.com/cloud/functional-components.html",
            },
            {
              label: "网站模板",
              to: "https://cms.13aq.com/cloud/website-template.html",
            },
          ],
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left", // 此项应显示在导航栏的一侧
          label: "帮助文档", // 要为此项目显示的名称
        },
        {
          label: "博客",
          to: "/blog",
          position: "left",
        },
        {
          label: "导航",
          to: "resource",
          position: "left",
        },
        {
          label: "标签",
          to: "/blog/tags",
          position: "right",
        },
        {
          label: "归档",
          to: "/blog/archive",
          position: "right",
        },
        {
          label: "工具",
          position: "right",
          items: [
            {
              label: "API",
              to: "https://api.kuizuo.cn/",
            },
            {
              label: "前端示例",
              to: "https://example.kuizuo.cn",
            },
          ],
        },
        /*  {
                  label: '项目',
                  position: 'right',
                  to: 'project',
                },*/
        /*{
                  type: 'localeDropdown',
                  position: 'right',
                },*/
      ],
    }, // 用于指定站点的导航栏
    footer: {
      style: "dark", // 设置页脚的颜色风格
      links: [
        {
          label: 'Infima',
          href: 'https://infima.dev/',
        },
        {
          html: `
            <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
              <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
            </a>
          `,
        },
      ], // 定义了一组链接
      copyright: `<p>Copyright © 2020 - ${new Date().getFullYear()} 慧科云 版权所有 &emsp; <a href="https://beian.miit.gov.cn/" target="_blank">${beian}</a></p><p>基于 <a href="https://docusaurus.io/" target="_blank">Docusaurus</a> & <a href="https://kuizuo.cn/" target="_blank">愧怍</a> 构建 &emsp; 由 <a href="https://vercel.com/" target="_blank">Vercel</a> 提供静态页面托管服务 &emsp; 由 <a href="https://www.algolia.com/" target="_blank">Algolia</a> 提供搜索引擎服务</p>`, // 定义了网站的版权声明
    }, // 用于指定站点的页脚
    prism: {
      theme: require("prism-react-renderer/themes/nightOwl"),
      darkTheme: require("prism-react-renderer/themes/vsDark"),
      additionalLanguages: [
        "java",
        "php",
        "rust",
        "toml"
      ],
      defaultLanguage: "javascript",
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: {
            start: "highlight-start",
            end: "highlight-end",
          },
        },
        {
          className: "code-block-error-line",
          line: "This will error",
        },
      ],
    }, // 用于指定代码高亮的主题和默认语言，以及添加额外的语言。
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    }, // 用于指定站点的目录结构，包括最小和最大标题级别。 
    algolia: {
      // Algolia 提供的应用程序 ID
      appId: "04SIS59MT7", // 公共 API 密钥：提交它是安全的
      apiKey: "5a6fdb492cbb0af3dc78fd47fbf0d44c",
      indexName: "website", // 可选：上下文搜索
      contextualSearch: true, // 可选：指定导航应通过 window.location 而不是在 history.push 上进行导航的域。当我们的 Algolia 配置抓取多个文档站点并且我们希望使用 window.location.href 导航到它们时很有用。
      // externalUrlRegex: 'external\\.com|domain\\.com',
      // 可选：替换来自 Algolia 的部分项目 URL。当使用不同的 baseURL 对多个部署使用相同的搜索索引时很有用。您可以在“from”参数中使用正则表达式或字符串。例如：localhost：3000 vs myCompany.comdocs
      replaceSearchResultPathname: {
        from: "/", // or as RegExp: /\/docs\//
        to: "/",
      }, // 可选：Algolia 搜索参数
      searchParameters: {}, // 可选：默认启用的搜索页面的路径（“false”表示禁用它）
      searchPagePath: "search", //... 其他 Algolia 参数
    }, // Algolia 插件
    zoom: {
      selector: ".markdown :not(em) > img",
      background: {
        light: "rgb(255, 255, 255)",
        dark: "rgb(50, 50, 50)",
      },
      config: {},
    },
    giscus: {
      repo: "huikeyun/website",
      repoId: "R_kgDOJUNmMg",
      category: "General",
      categoryId: "DIC_kwDOJUNmMs4CVoSA",
      theme: "light",
      darkTheme: "dark",
    },
    liveCodeBlock: {
      playgroundPosition: "top",
    },
    socials: {
      github: "https://github.com/huikeyun",
      gitee: "https://gitee.com/huikeyun",
      twitter: "",
      juejin: "",
      csdn: "",
      qq: "https://wpa.qq.com/msgrd?v=3&amp;uin=1031710967&amp;site=qq",
      zhihu: "",
      cloudmusic: "",
      feishu: "https://www.feishu.cn/invitation/page/add_contact/?token=5daq978c-9818-42da-9731-6c456478cacc&amp;unique_id=jziuVx6L26d3yoez5Y_-yQ==",
    },
  }, // 自定义主题的行为和外观
  title: "慧科云", // 网站的标题
  titleDelimiter: "-", // 网站标题分隔符
  trailingSlash: true, // 是否在网站 URL 的末尾添加斜杠
  url: "https://13aq.com", // 网站的基本 URL
};
module.exports = config;
