import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "UltraChess",
  description: "Documentation for UltraChess",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  ignoreDeadLinks: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo2.svg',
    nav: [
      { text: 'Guide', link: '/welcome' }
    ],
    search: {
      provider: 'local'
    },    

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Welcome to UltraChess', link: '/welcome' },
          { text: 'Prerequisites', link: '/prerequisites' },
        ]
      },
      {
        text: 'Pieces Guide',
        items: [
          { text: 'Pawns', link: '/pawns' },
          { text: 'Knights/Bishops', link: '/knights-bishops' },
          { text: 'Rooks', link: '/rooks' },
          { text: 'Queens and Ultra Queens', link: '/queens-ultraqueens' },
        ]
      }
    ]
  }
})
