import { Component, OnInit, Input, ElementRef, SimpleChanges, ContentChild, ViewChild, ViewContainerRef } from '@angular/core';
import { naiveResizeObserverComponent } from 'naive/common';
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
    @Input('object-fit') objectFit: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' = 'fill';
    /** 头像的尺寸 */
    @Input() size: 'small' | 'medium' | 'large' | number = 'medium';
    /** 头像的地址 */
    @Input() src: string | undefined = undefined;
    /** 在Angular中，如果<n-avatar round></n-avatar>这么使用，Input，则在组件中取值为空字符串'' */
    /** 头像是否圆形 */
    @Input() round: boolean | string = false;
    /** 头像的图片加载失败执行的回调 */
    @Input('on-error') onError: (e: Event) => void;
    /** 自定义样式 */
    @Input() customStyle: {
        [index: string]: unknown;
    } = {};

    @ContentChild(naiveAvatarText) defaultContent!: naiveAvatarText;

    @ViewChild('text') text!: ElementRef<any>;

    @ViewChild('self') self!: ElementRef<any>;

    @ViewChild('observer', { read: naiveResizeObserverComponent }) naiveResizeObserverComponent;

    hasLoadErrorRef = false;

    /** 计算文字变形样式 */
    fitTextTransform = (_type): void => {
        let memoedTextHtml: string | null = null;
        if (!this.text) return;
        // console.log(type);
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
    };

    // 处理图片加载错误
    handleError = (e: Event): void => {
        // 如果有错误，将hasLoadErrorRef置为true
        this.hasLoadErrorRef = true;
        if (this.onError /* 如果有传入错误处理函数，则执行 */) {
            this.onError(e);
        }
    };

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

    /** 返回文本变形样式 */
    get textStyle() {
        return `transform: translateX(-50%) translateY(-50%) scale(1);`;
    }

    /** 构建行内样式css变量 */
    generateStyle() {
        let fontSize = '14px';
        let border = '2px solid #fff';
        let borderRadius = '3px';
        // 解构给新的变量名赋值
        let { color: propColor } = this;
        let color = 'rgba(204, 204, 204, 1)';
        let colorModal = color;
        let colorPopover = color;
        let cubicBezierEaseInOut = 'cubic-bezier(0.4, 0, 0.2, 1)';
        let height = this.size && this.isNumber(this.size) ? `${this.size}px` : '34px';
        let str = {
            '--n-font-size': fontSize,
            '--n-border': this.bordered ? border : 'none',
            '--n-border-radius': this.round ? '50%' : borderRadius,
            '--n-color': propColor || color,
            '--n-color-modal': propColor || colorModal,
            '--n-color-popover': propColor || colorPopover,
            '--n-bezier': cubicBezierEaseInOut,
            '--n-merged-size': `var(--n-avatar-size-override, ${height})`
        };

        // 自定义颜色
        if (this.customStyle) {
            Object.keys(this.customStyle).forEach((key) => {
                // 将自定义颜色加入style对象
                str[key] = `${this.customStyle[key]}`;
            });
        }

        return str;

        // const stack = [];
        // this.isNumber(this.size) ? stack.push(`--n-merged-size:${this.size}px`) : '';
        // this.round ? stack.push(`--n-border-radius: 50%`) : '';
        // if (this.customStyle) {
        //     Object.keys(this.customStyle).forEach((key) => {
        //         stack.push(`${key}: ${this.customStyle[key]}`);
        //     });
        // }
        // return stack.join(';');
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

    constructor(public el: ElementRef, public viewContainerRef: ViewContainerRef) {}

    /** 生命周期 */
    ngOnInit(): void {}

    ngAfterContentInit() {
        // console.log(this.defaultContent, "defaultContent");
        // console.log(this.defaultContent?.templateRef)
        if (this.defaultContent) {
            this.defaultContent.emit.subscribe((_value) => {
                this.fitTextTransform('directive');
            });
        }
    }

    ngAfterViewInit() {
        // console.log(this.naiveResizeObserverComponent);
        if (!this.naiveResizeObserverComponent) return;
        this.fitTextTransform('init');
        // console.log(this.defaultContent)
    }
}
