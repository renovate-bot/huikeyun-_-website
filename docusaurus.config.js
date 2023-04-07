const path = require('path')
const beian = '闽ICP备2020017848号-2'

const announcementBarContent = `<a href="/typescript-full-stack-technology-trpc" target="_blank">Typescript 全栈最值得学习的技术栈 TRPC</a>`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '慧科云', // 网站标题。
  tagline: '企业数字化解决方案服务商', // 网站的标语。
  titleDelimiter: '-', // 会在生成的 <title> 标签中被用作标题分隔符
  trailingSlash: true, // 自定义 URL/链接后是否添加末尾斜杠
  url: 'https://help.13aq.com', // 在此处设置您网站的生产网址
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/logo.svg',
    announcementBar: {
      id: 'announcementBar-3',
      content: announcementBarContent,
    },

    // 元数据
    metadata: [
      {
        name: 'keywords',
        content: '慧科云CMS, 帮助文档, 内容管理系统',
      },
      {
        name: 'description',
        content: '慧科云内容管理系统的帮助文档',
      },
    ],
    docs: {
      sidebar: {
        hideable: true, // 可隐藏侧边栏
        autoCollapseCategories: true, // 自动折叠侧边栏类别
      },
    },
    navbar: {
      title: '慧科云', // 导航栏的标题
      // 徽标对象的自定义
      logo: {
        alt: '慧科云', // 徽标图像的 Alt 标记。
        src: 'img/logo.svg', // 浅色模式下徽标图像的网址
        srcDark: 'img/logo.svg', // 在深色模式下使用的备用图像 URL
      },
      hideOnScroll: true,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left', // 此项应显示在导航栏的一侧
          label: '帮助文档', // 要为此项目显示的名称
        },
        {
          label: '博客',
          to: '/blog',
          position: 'left',
        },
        {
          label: '导航',
          to: 'resource',
          position: 'left',
        },
        {
          label: '标签',
          to: '/blog/tags',
          position: 'right',
        },
        {
          label: '归档',
          to: '/blog/archive',
          position: 'right',
        },
        {
          label: '工具',
          position: 'right',
          items: [
            {
              label: 'API',
              to: 'https://api.kuizuo.cn/',
            },
            {
              label: '前端示例',
              to: 'https://example.kuizuo.cn',
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
    },
    footer: {
      style: 'dark',
      copyright: `<p>Copyright © 2020 - ${new Date().getFullYear()} 慧科云 版权所有 &emsp; <a href="https://beian.miit.gov.cn/" target="_blank">${beian}</a></p><p>基于 <a href="https://docusaurus.io/" target="_blank">Docusaurus</a> 构建 &emsp; 由 <a href="https://vercel.com/" target="_blank">Vercel</a> 提供静态网页托管服务 &emsp; 由 <a href="https://www.algolia.com/" target="_blank">Algolia</a> 提供搜索引擎服务</p>`
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: [
        'java',
        'php',
        'rust',
        'toml'
      ],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {
            start: 'highlight-start',
            end: 'highlight-end'
          },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    }, // Algolia 插件
    algolia: {
      // Algolia 提供的应用程序 ID
      appId: '7ZW9W06LF2',

      // 公共 API 密钥：提交它是安全的
      apiKey: '0f4e231d2d87b3053e904480bc4439b3',

      indexName: 'help-13aq',

      // 可选：上下文搜索
      contextualSearch: true,

      // 可选：指定导航应通过 window.location 而不是在 history.push 上进行导航的域。当我们的 Algolia 配置抓取多个文档站点并且我们希望使用 window.location.href 导航到它们时很有用。
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // 可选：替换来自 Algolia 的部分项目 URL。当使用不同的 baseURL 对多个部署使用相同的搜索索引时很有用。您可以在“from”参数中使用正则表达式或字符串。例如：localhost：3000 vs myCompany.comdocs
      replaceSearchResultPathname: {
        from: '/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // 可选：Algolia 搜索参数
      searchParameters: {},

      // 可选：默认启用的搜索页面的路径（“false”表示禁用它）
      searchPagePath: 'search',

      //... 其他 Algolia 参数
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
      config: {},
    },
    matomo: {
      matomoUrl: 'https://matomo.kuizuo.cn/',
      siteId: '1',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
    giscus: {
      repo: 'kuizuo/blog',
      repoId: 'MDEwOlJlcG9zaXRvcnkzOTc2MjU2MTI=',
      category: 'General',
      categoryId: 'DIC_kwDOF7NJDM4CPK95',
      theme: 'light',
      darkTheme: 'dark',
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
      github: 'https://github.com/kuizuo',
      twitter: 'https://twitter.com/kuizuo',
      juejin: 'https://juejin.cn/user/1565318510545901',
      csdn: 'https://blog.csdn.net/kuizuo12',
      qq: 'https://wpa.qq.com/msgrd?v=3&amp;uin=911993023&amp;site=qq',
      zhihu: 'https://www.zhihu.com/people/kuizuo',
      cloudmusic: 'https://music.163.com/#/user/home?id=1333010742',
    },
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: '愧怍的个人博客',
      },
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: "docs", // 站点文档部分的 URL 前缀。
          sidebarPath: 'sidebars.js',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-S4SD5NXWXF',
          anonymizeIP: true,
        }, // debug: true,
      }),
    ],
  ], // themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(
      __dirname,
      './src/plugin/plugin-baidu-tongji'
    ),
    path.resolve(
      __dirname,
      './src/plugin/plugin-baidu-push'
    ),
    [
      path.resolve(
        __dirname,
        './src/plugin/plugin-content-blog'
      ),
      {
        path: 'blog',
        routeBasePath: 'blog',
        editUrl: ({
                    locale,
                    blogDirPath,
                    blogPath,
                    permalink
                  }) => `https://github.com/kuizuo/blog/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: '愧怍的个人博客',
        blogSidebarCount: 10,
        blogSidebarTitle: '最近更新',
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({
                        content,
                        frontMatter,
                        defaultReadingTime
                      }) => defaultReadingTime({
                                                 content,
                                                 options: {wordsPerMinute: 300}
                                               }),
        feedOptions: {
          type: 'all',
          title: '愧怍',
          copyright: `Copyright © ${new Date().getFullYear()} 愧怍 Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
          },
        ],
      },
    ],
  ],
  stylesheets: [],
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: [
      'zh-Hans',
      'en'
    ], // 站点上部署的区域设置列表
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
    },
    path: 'i18n', // 所有区域设置文件夹都相对于的根文件夹
  },
}

module.exports = config
