import { Component, OnInit, Input, ElementRef, SimpleChanges, ContentChild, ViewChild } from '@angular/core';
import { naiveAvatarText } from './avatar-text.directive';

/**
 * 头像组件
 */
@Component({
    selector: 'n-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./style/style.scss'],
    host: {
        style: 'display: inline-flex'
    }
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
    @Input() src: string | undefined = undefined;
    /** 在Angular中，如果<n-avatar round></n-avatar>这么使用，Input，则在组件中取值为空字符串'' */
    /** 头像是否圆形 */
    @Input() round: boolean | string = false;
    /** 头像的图片加载失败执行的回调 */
    @Input('on-error') onError: (e: Event) => void = () => {};
    /** 自定义样式 */
    @Input() customStyle: {
        [index: string]: unknown;
    } = {};

    @ContentChild(naiveAvatarText) defaultContent!: naiveAvatarText;

    @ViewChild('text') text!: ElementRef<any>;

    @ViewChild('self') self!: ElementRef<any>;

    fitTextTransform(): void {
        let memoedTextHtml: string | null = null;
        const { nativeElement: textEl } = this.text;
        if (textEl) {
            if (memoedTextHtml === null || memoedTextHtml !== textEl.innerHTML) {
                memoedTextHtml = textEl.innerHTML;
                const { nativeElement: selfEl } = this.self;
                if (selfEl) {
                    const { offsetWidth: elWidth, offsetHeight: elHeight } = selfEl;
                    const { offsetWidth: textWidth, offsetHeight: textHeight } = textEl;
                    const radix = 0.9;
                    const ratio = Math.min((elWidth / textWidth) * radix, (elHeight / textHeight) * radix, 1);
                    textEl.style.transform = `translateX(-50%) translateY(-50%) scale(${ratio})`;
                }
            }
        }
    }

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
        return {
            [this.size]: this.isString(this.size)
        };
    }

    get textStyle() {
        return `transform: translateX(-50%) translateY(-50%) scale(1);`;
    }

    /** 构建行内样式css变量 */
    generateStyle() {
        const stack = [];
        this.isNumber(this.size) ? stack.push(`--n-merged-size:${this.size}px`) : '';
        this.round ? stack.push(`--n-border-radius: 50%`) : '';
        if (this.customStyle) {
            Object.keys(this.customStyle).forEach((key) => {
                stack.push(`${key}: ${this.customStyle[key]}`);
            });
        }
        return stack.join(';');
    }

    /** 私有变量，用来设置行内样式，因为返给ngStyle会报错，无法使用css变量，所以返给[style] */
    get _style() {
        let value = this.generateStyle();
        return value;
    }

    /** 生命周期 */
    ngOnChanges(_changes: SimpleChanges /* 暂时用不到，后续可能会用到这个参数 */) {
        /** 在Angular中，如果<n-avatar round></n-avatar>这么使用，Input，则在组件中取值为空字符串'' */
        this.round = this.round === '' ? true : false;
    }

    constructor() {}

    /** 生命周期 */
    ngOnInit(): void {}

    ngAfterContentInit() {
        // console.log(this.defaultContent, "defaultContent");
        // console.log(this.defaultContent?.templateRef)
        if (this.defaultContent) {
            this.defaultContent.emit.subscribe((_value) => {
                this.fitTextTransform();
            });
        }
    }

    ngAfterViewInit() {
        this.fitTextTransform();
        // console.log(this.defaultContent)
    }
}
