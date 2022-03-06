import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { naiveResizeObserverModule } from 'naive/common';
import { naiveAvatarGroupComponent } from './avatar-group.component';
import { naiveAvatarText } from './avatar-text.directive';
import { naiveAvatarComponent } from './avatar.component';

@NgModule({
    declarations: [naiveAvatarComponent, naiveAvatarGroupComponent, naiveAvatarText /* 这里声明，来使用指令和组件 */],
    imports: [CommonModule, naiveResizeObserverModule],
    exports: [naiveAvatarComponent, naiveAvatarGroupComponent, naiveAvatarText]
})
export class naiveAvatarModule {}
