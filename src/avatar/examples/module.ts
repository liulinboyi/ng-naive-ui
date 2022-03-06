import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { naiveAvatarModule } from 'naive/avatar';
import { naiveAvatarSizeExampleComponent } from './size/size.component';
import { naiveAvatarShapeExampleComponent } from './shape/shape.component';
import { naiveAvatarColorExampleComponent } from './color/color.component';
import { naiveAvatarChangeExampleComponent } from './change/change.component';
import { FormsModule } from '@angular/forms';
import { naiveAvatarChangeObserverExampleComponent } from './change-observer/change-observer.component';
import { naiveAvatarErrorExampleComponent } from './error/error.component';
import { naiveAvatarGroupExampleComponent } from './group/group.component';
const COMPONENTS = [
    naiveAvatarSizeExampleComponent,
    naiveAvatarShapeExampleComponent,
    naiveAvatarColorExampleComponent,
    naiveAvatarChangeExampleComponent,
    naiveAvatarChangeObserverExampleComponent,
    naiveAvatarErrorExampleComponent,
    naiveAvatarGroupExampleComponent
];

@NgModule({
    declarations: COMPONENTS,
    imports: [CommonModule, naiveAvatarModule, FormsModule],
    exports: COMPONENTS,
    providers: []
})
export class naiveAvatarExamplesModule {}
