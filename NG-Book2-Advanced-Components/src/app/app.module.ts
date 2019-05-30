import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InlineStyleComponent } from './styling/inline-style/inline-style.component';


@NgModule({
  declarations: [
    AppComponent,
    InlineStyleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
