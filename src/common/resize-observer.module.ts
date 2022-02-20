import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { naiveResizeObserverComponent } from './resize-observer.component';
import { naiveAvatarModule } from 'naive/avatar';

@NgModule({
    declarations: [naiveResizeObserverComponent],
    imports: [CommonModule, naiveAvatarModule],
    exports: [naiveResizeObserverComponent]
})
export class naiveResizeObserverModule {}
