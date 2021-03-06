// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { DocgeniTemplateModule } from '@docgeni/template';
import { DOCGENI_SITE_PROVIDERS, RootComponent } from './content/index';

@NgModule({
    declarations: [],
    imports: [BrowserModule, DocgeniTemplateModule, RouterModule.forRoot([])],
    providers: [...DOCGENI_SITE_PROVIDERS],
    bootstrap: [RootComponent]
})
export class AppModule {
    constructor() {}
}
