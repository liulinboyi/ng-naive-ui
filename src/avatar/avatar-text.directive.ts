import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[nAvatarText]' })
export class naiveAvatarText {
    constructor(public templateRef: TemplateRef<unknown>) {}
    ngOnInit(): void {
        // console.log("naiveAvatarText")
    }
}
