import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

export type VResizeObserverOnResize = (entry: ResizeObserverEntry) => void;

/**
 * ResizeObserverComponent
 */
@Component({
    selector: 'n-resize-observer',
    templateUrl: './resize-observer.component.html',
    styleUrls: ['./style/style.scss'],
    host: {
        // style: 'display: inline-flex'
    }
})
export class naiveResizeObserverComponent implements OnInit {
    @Input() onResize: VResizeObserverOnResize | undefined;

    registered: false | undefined;
    handleResize(entry: ResizeObserverEntry) {
        const { onResize } = this;
        if (onResize !== undefined) onResize(entry);
    }

    /** 生命周期 */
    ngOnChanges(_changes: SimpleChanges /* 暂时用不到，后续可能会用到这个参数 */) {}

    constructor() {}

    /** 生命周期 */
    ngOnInit(): void {}

    ngAfterContentInit() {}

    ngAfterViewInit() {
        console.log(this);
        // const el = this.$el as Element | undefined
        // if (el === undefined) {
        //   warn('resize-observer', '$el does not exist.')
        //   return
        // }
        // if (el.nextElementSibling !== el.nextSibling) {
        //   if (el.nodeType === 3 && el.nodeValue !== '') {
        //     warn(
        //       'resize-observer',
        //       '$el can not be observed (it may be a text node).'
        //     )
        //     return
        //   }
        // }
        // if (el.nextElementSibling !== null) {
        //   delegate.registerHandler(el.nextElementSibling, this.handleResize)
        //   this.registered = true
        // }
    }
}
