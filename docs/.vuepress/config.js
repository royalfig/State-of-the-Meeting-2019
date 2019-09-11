  module.exports = {
      title: 'History of Science Society',
      description: 'State of the Meeting 2019',
      head: [
        ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'}],
        ['link', {rel: 'manifest', href: '/site.webmanifest'}],
        ['link', {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#666633'}],
        ['meta', {name: 'msapplication-TileColor', content: '#455f73'}],
        ['meta', {name: 'theme-color', content: '#666633'}]
      ],
      themeConfig: {
        logo: '/logo.jpg',
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
              '/acknowledgments/'
          ]
      }
  }