import {
    Component,
    OnInit,
    Input,
    SimpleChanges,
    ViewContainerRef,
    ElementRef,
    ChangeDetectionStrategy,
    ViewEncapsulation
} from '@angular/core';
import delegate from './delegate';
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
    },
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class naiveResizeObserverComponent implements OnInit {
    @Input() onResize: VResizeObserverOnResize | undefined;

    registered: boolean | undefined = false;
    handleResize(entry: ResizeObserverEntry) {
        const { onResize } = this;
        if (onResize !== undefined) onResize(entry);
    }

    /** 生命周期 */
    ngOnChanges(_changes: SimpleChanges /* 暂时用不到，后续可能会用到这个参数 */) {}

    constructor(public el: ElementRef, public viewContainerRef: ViewContainerRef) {}

    /** 生命周期 */
    ngOnInit(): void {}

    ngAfterContentInit() {}

    ngAfterViewInit() {
        const el = this.el.nativeElement;
        if (el === undefined) {
            console.warn('resize-observer', '$el does not exist.');
            return;
        }
        if (el.nextElementSibling !== el.nextSibling) {
            if (el.nodeType === 3 && el.nodeValue !== '') {
                console.warn('resize-observer', '$el can not be observed (it may be a text node).');
                return;
            }
        }
        if (el.nextElementSibling !== null) {
            delegate.registerHandler(el.nextElementSibling, () => this.handleResize);
            this.registered = true;
        }
    }

    ngOnDestroy() {
        if (this.registered) {
            delegate.unregisterHandler(this.el.nativeElement.nextElementSibling);
        }
    }
}
