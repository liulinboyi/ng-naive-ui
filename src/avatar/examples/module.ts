import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { naiveAvatarModule } from '@naive/naive/avatar';
import { naiveAvatarSizeExampleComponent } from './size/size.component';
import { naiveAvatarShapeExampleComponent } from './shape/shape.component';
import { naiveAvatarColorExampleComponent } from './color/color.component';
const COMPONENTS = [naiveAvatarSizeExampleComponent, naiveAvatarShapeExampleComponent, naiveAvatarColorExampleComponent];

@NgModule({
    declarations: COMPONENTS,
    imports: [CommonModule, naiveAvatarModule],
    exports: COMPONENTS,
    providers: []
})
export class naiveAvatarExamplesModule {}
