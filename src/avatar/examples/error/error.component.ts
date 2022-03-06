import { Component } from '@angular/core';

@Component({
    selector: 'naive-avator-error-example',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class naiveAvatarErrorExampleComponent {
    constructor() {}

    /** 处理错误 */
    onError(e) {
        console.warn(e);
    }
}
