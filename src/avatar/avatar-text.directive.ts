import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({ selector: '[nAvatarText]' })
export class naiveAvatarText {
    constructor(public templateRef: TemplateRef<unknown>, public viewContainerRef: ViewContainerRef) {}

    public emit = new Subject();

    @Input('nAvatarText')
    set resize(value: any) {
        // console.log(value)
        this.emit.next(value);
    }

    ngOnInit(): void {
        // console.log("naiveAvatarText")
        // console.log(this.templateRef, "templateRef")
    }
}
