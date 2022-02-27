import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { naiveResizeObserverComponent } from './resize-observer.component';

@NgModule({
    declarations: [naiveResizeObserverComponent],
    imports: [CommonModule],
    exports: [naiveResizeObserverComponent]
})
export class naiveResizeObserverModule {}
