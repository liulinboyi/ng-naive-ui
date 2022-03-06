import { Component } from '@angular/core';

@Component({
    selector: 'naive-avator-group-example',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss']
})
export class naiveAvatarGroupExampleComponent {
    constructor() {}
    options = [
        {
            name: '张三',
            src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
        },
        {
            name: '李四',
            src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
        },
        {
            name: '王五',
            src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
        },
        {
            name: '赵六',
            src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
        },
        {
            name: '七仔',
            src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
        }
    ];
}
