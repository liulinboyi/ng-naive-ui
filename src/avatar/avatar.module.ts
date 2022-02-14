import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { naiveAvatarComponent } from './avatar.component';

@NgModule({
    declarations: [naiveAvatarComponent],
    imports: [CommonModule],
    exports: [naiveAvatarComponent]
})
export class naiveAvatarModule {}
