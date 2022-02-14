/**
 * @type {import('@naive/core').naiveConfig}
 */
module.exports = {
    mode: 'full',
    title: 'Ng-Naive',
    logoUrl: 'https://www.naiveui.com/assets/naivelogo.93278402.svg',
    docsDir: 'docs',
    // repoUrl: 'https://github.com/liulinboyi/ng-naive-ui',
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
            path: 'https://github.com/liulinboyi/ng-naive-ui',
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
            ],
            labels: {
                new: { text: '新鲜出炉', color: '#73D897' },
                deprecated: { text: '你有更好的选择', color: '#AAAAAA' },
                experimental: { text: '实验中', color: '#F6C659' },
                work: { text: '进行中', color: '#fcad44' }
            }
        }
    ],
    defaultLocale: 'zh-cn',
    locales: [
        {
            key: 'en-us',
            name: 'EN'
        },
        {
            key: 'zh-cn',
            name: '中文'
        }
    ],
    siteProjectName: 'site'
};
