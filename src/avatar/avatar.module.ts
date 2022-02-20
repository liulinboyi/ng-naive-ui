import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { naiveResizeObserverModule } from '@naive/naive/common';
import { naiveAvatarText } from './avatar-text.directive';
import { naiveAvatarComponent } from './avatar.component';

@NgModule({
    declarations: [naiveAvatarComponent, naiveAvatarText /* 这里声明，来使用指令和组件 */],
    imports: [CommonModule],
    exports: [naiveAvatarComponent, naiveAvatarText]
})
export class naiveAvatarModule {}
