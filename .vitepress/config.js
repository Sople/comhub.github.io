import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

function getSidebar(dir, basePath = '') {
  const files = fs.readdirSync(dir)
  const sidebar = []

  files.forEach(file => {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      sidebar.push({
        text: file,
        collapsible: true,
        collapsed: true, 
        items: getSidebar(fullPath, path.join(basePath, file))
      })
    } else if (file.endsWith('.md')) {
      const name = file.replace(/\.md$/, '')
      sidebar.push({
        text: snakeToTitleCase(name),
        link: path.join('/docs/', basePath, name + '.md')
      })
    }
  })

  return sidebar
}

function snakeToTitleCase(snakeCase) {
  return snakeCase
    .split('_') // 将字符串按下划线分割成数组
    .map(word => {
      // 特殊处理 "Index" 为 "Introduction"
      if (word.toLowerCase() === 'index') {
        return 'Introduction';
      }
      return word.charAt(0).toUpperCase() + word.slice(1); // 将每个单词的首字母大写
    })
    .join(' '); // 将数组重新组合成字符串，并在单词之间添加空格
}

const sidebarConfig = getSidebar(path.resolve(__dirname, '../docs')).reduce((acc, item) => {
  acc['/docs/'+item.text+'/'] = item;
  return acc;
}, {});

// 打印 sidebar 的最终值
console.log('Sidebar Configuration:', JSON.stringify(sidebarConfig, null, 2))

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "wwwto.com - Find your way online",
  description: "Full-Stack Development Technologies",
  head: [
    ['link', { rel: 'icon', href: '/logo/favicon.svg' }], // 引用 favicon.ico
    // 添加 Google Analytics 代码
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-KF5QQXRKX4' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-KF5QQXRKX4');
    `]
  ],
  themeConfig: {
    siteTitle: false,
    logo: '/logo/logo.svg',
    logoLink: '/',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    editLink: {
      pattern: 'https://github.com/iwwwto/wwwto.com/edit/dev/:path',
      text: 'Edit this page on GitHub'
    },

    sidebar: sidebarConfig,

    outline: 'deep',

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/iwwwto' }
    ],

    footer: {
      message: 'From www to the future',
      copyright: 'Copyright © 2005-2024 wwwto.com'
    }
  }
})
