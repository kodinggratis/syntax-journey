import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Syntax Journey',
  description: 'Catatan perjalanan belajar kodinggratis by Lalu Wahyudi.',

  srcDir: '../',

  rewrites: {
    'docs/(.*)': '(.*)',
    'packages/git-&-github/src/(.*)': 'git-&-github/(.*)',
    'packages/deep-dive-golang/src/(.*)': 'deep-dive-golang/(.*)',
    'packages/paint-point-software-engineering/src/(.*)': 'paint-point-software-engineering/(.*)'
  },

  themeConfig: {
    nav: [
      { text: 'Markas', link: '/' },
      {
        text: 'Catatan',
        items: [
          { text: 'Git & Github', link: '/git-&-github/' },
          { text: 'Deep Dive Golang', link: '/deep-dive-golang/' },
          { text: 'Paint Point Software Engineering', link: '/paint-point-software-engineering/' }
        ]
      },
     { text: 'Tentang', link: '/about' },
    ],

    sidebar: {
      '/git-&-github/': {
        base: '/git-&-github/',
        items: [
          {
            text: 'Git & Github',
            items: [
              { text: 'Introduction', link: 'introduction' },
              { text: 'Table of Contents', link: 'table-of-content' }
            ]
          }
        ]
      },
      '/deep-dive-golang/': {
        base: '/deep-dive-golang/',
        items: [
          {
            text: 'Deep Dive Golang',
            items: [
              { text: 'Introduction', link: 'introduction' },
              { text: 'Table of Contents', link: 'table-of-content' }
            ]
          }
        ]
      },

      '/paint-point-software-engineering/': {
        base: '/paint-point-software-engineering/',
        items: [
          {
            text: 'Paint Point Software Engineering',
            items: [
              { text: 'Introduction', link: 'introduction' },
              { text: 'Table of Contents', link: 'table-of-content' }
            ]
          }
        ]
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kodinggratis/syntax-journey' }
    ],
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'Daftar Isi' },
    docFooter: { prev: 'Halaman sebelumnya', next: 'Halaman berikutnya' },
    lastUpdated: { text: 'Terakhir diperbarui' },
    returnToTopLabel: 'Kembali ke atas',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Tampilan',
    lightModeSwitchTitle: 'Mode terang',
    darkModeSwitchTitle: 'Mode gelap'
  }
})