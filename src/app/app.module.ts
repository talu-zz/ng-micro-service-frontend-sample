import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalStylesModule } from 'global-styles/global-styles';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalStylesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
