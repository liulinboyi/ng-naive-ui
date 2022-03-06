import {
    Component,
    OnInit,
    Input,
    ElementRef,
    SimpleChanges,
    ContentChild,
    ViewChild,
    ViewContainerRef,
    ChangeDetectionStrategy,
    ViewEncapsulation
} from '@angular/core';

/**
 * 头像组件
 */
@Component({
    selector: 'n-avatar-group',
    templateUrl: './avatar-group.component.html',
    styleUrls: ['./style/group.scss'],
    host: {
        style: 'display: inline-flex'
    },
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class naiveAvatarGroupComponent implements OnInit {
    @Input() options;
    @Input() size;
    @Input() max;
    @Input() round;
    @Input() vertical;
    @Input('max-style') maxStyle;
    public rest;
    public _options;

    processOptions() {
        const { options, max } = this;
        if (max === undefined) return options;
        if (options.length > max) return options.slice(0, max - 1);
        if (options.length === max) return options.slice(0, max);
        return options;
    }

    processRest() {
        const { max } = this;
        if (max === undefined) return undefined;
        const { options } = this;
        if (options.length > max) return options.slice(max - 1, options.length);
        return [];
    }

    ngOnInit(): void {
        this.rest = this.processRest();
        this._options = this.processOptions();
    }
}
