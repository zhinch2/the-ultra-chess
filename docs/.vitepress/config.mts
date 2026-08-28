import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "UltraChess",
  description: "Documentation for UltraChess",
  head: [
    ['link', { rel: 'icon', href: '../assets/logo2.svg' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '../assets/logo2.svg',
    nav: [
      { text: 'Guide', link: '/pawns' }
    ],
    

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Welcome to UltraChess', link: '/introduction' },
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
