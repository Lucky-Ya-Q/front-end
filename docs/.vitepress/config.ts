import {defineConfig} from 'vitepress'

export default defineConfig({
    title: '前端学习',
    titleTemplate: '老刘的前端学习笔记',
    markdown: {
        lineNumbers: true
    },
    lastUpdated: true,
    themeConfig: {
        nav: [
            {text: 'HTML', link: '/one/1.1命令式和声明式', activeMatch: '/html/'},
            {text: 'CSS', link: '/two/4.1响应式数据与副作用函数', activeMatch: '/css/'},
            {text: 'JS', link: '/js/Promise', activeMatch: '/js/'},
            {text: 'VUE', link: '/four/12.1渲染组件', activeMatch: '/vue/'}
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/Lucky-Ya-Q/front-end'}
        ],
        sidebar: {
            '/html/': html(),
            '/css/': css(),
            '/js/': js(),
            '/vue/': vue()
        },
        editLink: {
            pattern: 'https://github.com/Lucky-Ya-Q/front-end/edit/master/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },
        lastUpdatedText: '最近更新时间',
        docFooter: {prev: '上一页', next: '下一页'},
        footer: {
            copyright: 'Copyright © 2022-present <a href="https://www.shanyexia.top">山野下</a>'
        }
    }
})

function html() {
    return []
}

function css() {
    return []
}

function js() {
    return []
}

function vue() {
    return []
}
