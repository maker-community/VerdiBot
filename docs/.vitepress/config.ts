import { defineConfig } from 'vitepress'

// 共享侧边栏配置
function getSidebar() {
  return {
    '/zh/guide/': [
      {
        text: '入门指南',
        items: [
          { text: '项目介绍', link: '/zh/guide/introduction' },
          { text: '硬件需求', link: '/zh/guide/requirements' },
          { text: '快速开始', link: '/zh/guide/getting-started' }
        ]
      },
      {
        text: '硬件制作',
        items: [
          { text: 'PCB 制作指南', link: '/zh/hardware/pcb-manufacturing' },
          { text: '物料清单 (BOM)', link: '/zh/hardware/bill-of-materials' },
          { text: 'PCB 焊接指南', link: '/zh/hardware/pcb-soldering' },
          { text: '3D 打印指南', link: '/zh/hardware/3d-printing' }
        ]
      },
      {
        text: '机器人组装',
        items: [
          { text: '组装准备', link: '/zh/assembly/preparation' },
          { text: '硬件连接', link: '/zh/assembly/hardware-connection' },
          { text: '组装步骤', link: '/zh/assembly/step-by-step' },
          { text: '测试验证', link: '/zh/assembly/testing' }
        ]
      },
      {
        text: '软件部分',
        items: [
          { text: '系统安装', link: '/zh/software/system-installation' },
          { text: '软件配置', link: '/zh/software/configuration' },
          { text: '使用指南', link: '/zh/software/usage' },
          { text: '故障排除', link: '/zh/software/troubleshooting' }
        ]
      },
      {
        text: '附录',
        items: [
          { text: '常见问题', link: '/zh/appendix/faq' },
          { text: '资源链接', link: '/zh/appendix/resources' },
          { text: '社区支持', link: '/zh/appendix/community' }
        ]
      }
    ],
    '/en/guide/': [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/en/guide/introduction' },
          { text: 'Hardware Requirements', link: '/en/guide/requirements' },
          { text: 'Quick Start', link: '/en/guide/getting-started' }
        ]
      },
      {
        text: 'Hardware Manufacturing',
        items: [
          { text: 'PCB Manufacturing Guide', link: '/en/hardware/pcb-manufacturing' },
          { text: 'Bill of Materials (BOM)', link: '/en/hardware/bill-of-materials' },
          { text: 'PCB Soldering Guide', link: '/en/hardware/pcb-soldering' },
          { text: '3D Printing Guide', link: '/en/hardware/3d-printing' }
        ]
      },
      {
        text: 'Robot Assembly',
        items: [
          { text: 'Preparation', link: '/en/assembly/preparation' },
          { text: 'Hardware Connection', link: '/en/assembly/hardware-connection' },
          { text: 'Step-by-Step Assembly', link: '/en/assembly/step-by-step' },
          { text: 'Testing & Validation', link: '/en/assembly/testing' }
        ]
      },
      {
        text: 'Software',
        items: [
          { text: 'System Installation', link: '/en/software/system-installation' },
          { text: 'Software Configuration', link: '/en/software/configuration' },
          { text: 'Usage Guide', link: '/en/software/usage' },
          { text: 'Troubleshooting', link: '/en/software/troubleshooting' }
        ]
      },
      {
        text: 'Appendix',
        items: [
          { text: 'FAQ', link: '/en/appendix/faq' },
          { text: 'Resources', link: '/en/appendix/resources' },
          { text: 'Community Support', link: '/en/appendix/community' }
        ]
      }
    ]
  }
}

// 共享导航配置
function getNav() {
  return {
    zh: [
      { text: '首页', link: '/zh/' },
      { text: '入门指南', link: '/zh/guide/introduction' },
      { 
        text: '硬件制作',
        items: [
          { text: 'PCB 制作', link: '/zh/hardware/pcb-manufacturing' },
          { text: '物料清单', link: '/zh/hardware/bill-of-materials' },
          { text: 'PCB 焊接', link: '/zh/hardware/pcb-soldering' },
          { text: '3D 打印', link: '/zh/hardware/3d-printing' }
        ]
      },
      { 
        text: '组装 & 软件',
        items: [
          { text: '机器人组装', link: '/zh/assembly/preparation' },
          { text: '软件使用', link: '/zh/software/system-installation' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/maker-community/VerdiBot' }
    ],
    en: [
      { text: 'Home', link: '/en/' },
      { text: 'Getting Started', link: '/en/guide/introduction' },
      { 
        text: 'Hardware',
        items: [
          { text: 'PCB Manufacturing', link: '/en/hardware/pcb-manufacturing' },
          { text: 'Bill of Materials', link: '/en/hardware/bill-of-materials' },
          { text: 'PCB Soldering', link: '/en/hardware/pcb-soldering' },
          { text: '3D Printing', link: '/en/hardware/3d-printing' }
        ]
      },
      { 
        text: 'Assembly & Software',
        items: [
          { text: 'Robot Assembly', link: '/en/assembly/preparation' },
          { text: 'Software Usage', link: '/en/software/system-installation' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/maker-community/VerdiBot' }
    ]
  }
}

export default defineConfig({
  title: 'VerdiBot',
  description: 'VerdiBot（阿荫）- 基于树莓派的桌面机器人复刻文档',
  
  // GitHub Pages 配置
  // 如果有自定义域名，设置环境变量 CUSTOM_DOMAIN=true
  base: process.env.CUSTOM_DOMAIN ? '/' : '/VerdiBot/',
  
  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: 'VerdiBot（阿荫）',
      description: 'VerdiBot（阿荫）- 基于树莓派的桌面机器人复刻文档',
      themeConfig: {
        nav: getNav().zh,
        sidebar: getSidebar(),
        editLink: {
          pattern: 'https://github.com/maker-community/VerdiBot/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页'
        },
        footer: {
          message: '基于 MIT 许可证发布',
          copyright: 'Copyright © 2025 创客社区（Hacker space）'
        },
        outline: {
          label: '页面导航'
        },
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'VerdiBot',
      description: 'VerdiBot - Raspberry Pi Desktop Robot DIY Documentation',
      themeConfig: {
        nav: getNav().en,
        sidebar: getSidebar(),
        editLink: {
          pattern: 'https://github.com/maker-community/VerdiBot/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
        footer: {
          message: 'Released under the MIT License',
          copyright: 'Copyright © 2025 Maker Community (Hacker space)'
        }
      }
    }
  },

  // 主题配置
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'VerdiBot',
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/maker-community/VerdiBot' }
    ],
    
    // 搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    }
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true
  },

  // 头部配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh-CN' }],
    ['meta', { name: 'og:site_name', content: 'VerdiBot' }],
    ['meta', { name: 'og:title', content: 'VerdiBot（阿荫）- 基于树莓派的桌面机器人' }],
    ['meta', { name: 'og:description', content: '基于树莓派的桌面机器人复刻文档，包含PCB制作、3D打印、组装和软件使用指南' }],
    ['meta', { name: 'og:image', content: '/assets/show1.jpg' }]
  ],

  // 构建配置
  outDir: '../docs-dist',
  
  // 忽略死链接检查
  ignoreDeadLinks: true
})