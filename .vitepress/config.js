import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sople.net",
  description: "Full-Stack Development Technologies",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/javascript/': [
        {
          text: 'JavaScript',
          items: [
            { text: 'Primitive Data Types', link: '/javascript/primitive_data_types.md' },
            { text: 'Variables', link: '/javascript/variables.md' },
            { text: 'Control Flow Statements', link: '/javascript/control_flow_statements.md' },
            { text: 'Functions', link: '/javascript/functions.md' },
            { text: 'Objects', link: '/javascript/objects.md' },
            { text: 'DOM', link: '/javascript/document_object_model.md' },
            { text: 'Collections', link: '/javascript/collections.md' },
            { text: 'Modules', link: '/javascript/modules.md' },
            { text: 'External libraries', link: '/javascript/external_libraries.md' },
            { text: 'Testing', link: '/javascript/testing.md' },
            { text: 'OOP', link: '/javascript/object_oriented_programming.md' },
            { text: 'Asynchronization', link: '/javascript/asynchronization.md' },
          ]
        }
      ],
      '/typescript/': [
        {
          text: 'TypeScript',
          items: [
            { text: 'Introduction', link: '/typescript/introduction.md' }
          ]
        }
      ],
      '/nodejs/': [
        {
          text: 'Node.js',
          items: [
            { text: 'Introduction', link: '/nodejs/introduction.md' }
          ]
        }
      ],
      '/css/': [
        {
          text: 'CSS',
          items: [
            { text: 'Introduction', link: '/css/introduction.md' }
          ]
        }
      ],
      '/html/': [
        {
          text: 'HTML',
          items: [
            { text: 'Introduction', link: '/html/introduction.md' }
          ]
        }
      ]
    },

    outline: 'deep',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sople' }
    ]
  }
})
