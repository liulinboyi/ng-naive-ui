import { Component, OnInit, HostBinding, Input, ElementRef, SimpleChanges } from '@angular/core';

/**
 * 头像组件
 */
@Component({
    selector: 'n-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./style/style.scss']
})
export class naiveAvatarComponent implements OnInit {
    /** 头像是否带边框 */
    @Input() bordered = false;
    /** 头像的背景色 */
    @Input() color = undefined;
    /** 头像加载失败时显示的图片的地址 */
    @Input('fallback-src') fallbackSrc = undefined;
    /** 头像的图片在容器内的的适应类型 */
    @Input('object-fit') objectFit = 'fill';
    /** 头像的尺寸 */
    @Input() size: 'small' | 'medium' | 'large' | number = 'medium';
    /** 头像的地址 */
    @Input() src: string = undefined;
    /** 在Angular中，如果<n-avatar round></n-avatar>这么使用，Input，则在组件中取值为空字符串'' */
    /** 头像是否圆形 */
    @Input() round: boolean | string = false;
    /** 头像的图片加载失败执行的回调 */
    @Input('on-error') onError: (e: Event) => void = undefined;

    /** 变量类型是否为string */
    isString(value: string | number) {
        return typeof value === 'string';
    }

    /** 变量类型是否为number */
    isNumber(value: string | number) {
        return typeof value === 'number';
    }

    /** 私有变量，用来设置图片尺寸class */
    get _size() {
        // 将值返给ngClass使用
        return { [this.size]: this.isString(this.size) };
    }

    /** 构建行内样式css变量 */
    generateStyle() {
        const stack = [];
        this.isNumber(this.size) ? stack.push(`--n-merged-size:${this.size}px`) : '';
        this.round ? stack.push(`--n-border-radius: 50%`) : '';
        return stack.join(';');
    }

    /** 私有变量，用来设置行内样式，因为返给ngStyle会报错，无法使用css变量，所以返给[style] */
    get _style() {
        let value = this.generateStyle();
        return value;
    }

    /** 生命周期 */
    ngOnChanges(changes: SimpleChanges /* 暂时用不到，后续可能会用到这个参数 */) {
        /** 在Angular中，如果<n-avatar round></n-avatar>这么使用，Input，则在组件中取值为空字符串'' */
        this.round = this.round === '' ? true : false;
    }

    /** 生命周期 */
    ngOnInit(): void {}
}
