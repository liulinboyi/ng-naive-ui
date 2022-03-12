module.exports = [
    {
        type: 'component',
        name: 'n-avatar',
        description: '头像组件',
        properties: [
            {
                name: 'bordered',
                description: '头像是否带边框',
                type: 'boolean',
                default: 'false'
            },
            {
                name: 'customStyle',
                description: '自定义样式',
                type: 'Object',
                default: undefined
            },
            {
                name: 'color',
                description: '头像的背景色',
                type: 'string',
                default: 'undefined'
            },
            {
                name: 'fallback-src',
                description: '头像加载失败时显示的图片的地址',
                type: 'string',
                default: 'undefined'
            },
            {
                name: 'object-fit',
                description: '头像的图片在容器内的的适应类型',
                type: "'fill' | 'contain' | 'cover' | 'none' | 'scale-down'",
                default: 'fill'
            },
            {
                name: 'size',
                description: '头像的尺寸',
                type: "'small' | 'medium' | 'large' | number",
                default: 'medium'
            },
            {
                name: 'src',
                description: '头像的地址',
                type: 'string',
                default: 'undefined'
            },
            {
                name: 'round',
                description: '头像是否圆形',
                type: 'boolean',
                default: 'false'
            },
            {
                name: 'on-error',
                description: '头像的图片加载失败执行的回调',
                type: '(e: Event) => void',
                default: 'undefined'
            }
        ]
    }
];
