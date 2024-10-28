import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Orange Office",
  description: "An Office Skills Learning Website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'docs', link: '/welcome' }
    ],

    sidebar: [
      {
        text: 'Start Here',
        items: [
          { text: 'Welcome', link: '/welcome' },
          { text: 'Lesson 01', link: '/lesson-01' },
          { text: 'About', link: '/about' },
          { text: 'Contact', link: '/contact' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
