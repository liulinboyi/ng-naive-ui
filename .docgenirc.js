/**
 * @type {import('@naive/core').naiveConfig}
 */
module.exports = {
    mode: 'full',
    title: 'Naive',
    logoUrl: 'https://www.naiveui.com/assets/naivelogo.93278402.svg',
    docsDir: 'docs',
    repoUrl: 'https://github.com/liulinboyi/ng-naive-ui',
    footer: 'Open-source MIT Licensed | Copyright © 2020-present Powered by self',
    navs: [
        null,
        {
            title: 'Components',
            path: 'components',
            lib: 'naive',
            locales: {
                'zh-cn': {
                    title: '组件'
                }
            }
        },
        {
            title: 'GitHub',
            path: 'https://github.com/naive/naive-template',
            isExternal: true
        }
    ],
    libs: [
        {
            name: 'naive',
            rootDir: './src',
            include: [],
            exclude: '',
            apiMode: 'compatible',
            categories: [
                {
                    id: 'general',
                    title: 'General',
                    locales: {
                        'zh-cn': {
                            title: '通用'
                        }
                    }
                }
            ]
        }
    ],
    defaultLocale: 'en-us',
    locales: [
        {
            key: 'en-us',
            name: 'EN'
        },
        {
            key: 'zh-cn',
            name: '中文'
        }
    ]
};
