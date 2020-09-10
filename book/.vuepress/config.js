module.exports = {
    title: "知识库",
    description: "yxuefeng 的知识库",
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    dest: './public',
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/nprogress'
    ],
    themeConfig: {
        nav: [
            { text: '简介', link: '/guide/'}
        ],
        sidebar: 'auto',
        lastUpdated: '最后更新'
    },
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '知识库',
            description: 'yxuefeng 的知识库'
        },
        '/en/': {
            lang: 'en-US',
            title: 'Repository',
            description: 'yxuefeng \'s repository.'
        }
    }
}