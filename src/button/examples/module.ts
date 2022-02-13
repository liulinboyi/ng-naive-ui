import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { naiveButtonBasicExampleComponent } from './basic/basic.component';
import { naiveButtonModule } from '@naive/naive/button';
const COMPONENTS = [naiveButtonBasicExampleComponent];

@NgModule({
    declarations: COMPONENTS,
    imports: [CommonModule, naiveButtonModule],
    exports: COMPONENTS,
    providers: []
})
export class naiveButtonExamplesModule {}
