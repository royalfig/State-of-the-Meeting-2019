  module.exports = {
      base: '/report/',
      title: 'History of Science Society',
      description: 'State of the Meeting 2019',
      head: [
          ['link', {
              rel: 'apple-touch-icon',
              sizes: '180x180',
              href: '/apple-touch-icon.png'
          }],
          ['link', {
              rel: 'icon',
              type: 'image/png',
              sizes: '32x32',
              href: '/favicon-32x32.png'
          }],
          ['link', {
              rel: 'icon',
              type: 'image/png',
              sizes: '16x16',
              href: '/favicon-16x16.png'
          }],
          ['link', {
              rel: 'manifest',
              href: '/site.webmanifest'
          }],
          ['link', {
              rel: 'mask-icon',
              href: '/safari-pinned-tab.svg',
              color: '#666633'
          }],
          ['meta', {
              name: 'msapplication-TileColor',
              content: '#455f73'
          }],
          ['meta', {
              name: 'theme-color',
              content: '#666633'
          }]
      ],
      themeConfig: {
          domain: 'https://hssonline.org/report',
          logo: '/logo.jpg',
          author: {
              name: 'Ryan Feigenbaum',
              twitter: '@theroyalfig'
          },
          nav: [{
                  text: 'Join',
                  link: 'https://hssonline.org/membership/subscriptions/'
              },
              {
                  text: 'Donate',
                  link: 'https://hssonline.org/get-involved/giving-to-the-hss/'
              },
              {
                  text: 'HSS',
                  link: 'https://hssonline.org/'
              }
          ],
          sidebar: [
              '/welcome/',
              '/submissions/',
              '/demographics/',
              '/grants/',
              '/satisfaction/',
              '/book-exhibit/',
              '/prizes/',
              '/conclusion/',
              '/acknowledgments/',
              '/colophon/'
          ]
      },
      plugins: [
          'seo', {
              siteTitle: (_, $site) => $site.title,
              title: $page => $page.title,
              description: $page => $page.frontmatter.description,
              author: (_, $site) => $site.themeConfig.author,
              tags: $page => $page.frontmatter.tags,
              twitterCard: _ => 'summary_large_image',
              type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
              url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
              image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image),
              publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date)
          },
          '@vuepress/back-to-top',
          '@vuepress/google-analytics',
          {
              'ga': 'UA-5101015-2'
          },
          '@vuepress/nprogress'
      ]
  }