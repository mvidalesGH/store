import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainHeaderUsrComponent } from './main-header-usr/main-header-usr.component';
import { MainHeaderMenuComponent } from './main-header-menu/main-header-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    MainHeaderComponent,
    MainHeaderUsrComponent,
    MainHeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
