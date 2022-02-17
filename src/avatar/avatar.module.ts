import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { naiveAvatarText } from './avatar-text.directive';
import { naiveAvatarComponent } from './avatar.component';

@NgModule({
    declarations: [naiveAvatarComponent, naiveAvatarText /* 这里声明，来使用指令和组件 */],
    imports: [CommonModule],
    exports: [
        naiveAvatarComponent,
        naiveAvatarText /* 这里得导出，否则不能同一个指令或者组件在多个模块中声明，导出就可以在其他模块使用了 */
    ]
})
export class naiveAvatarModule {}
