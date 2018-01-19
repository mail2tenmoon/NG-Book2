import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import { UserDemoInjectorComponent } from './user-demo/user-demo.injector.component';
import { UserDemoModule } from './user-demo/user-demo.module';
import { AnalyticsDemoComponent } from './analytics-demo/analytics-demo.component';
import { AnalyticsDemoModule } from './analytics-demo/analytics-demo.module';


@NgModule({
  declarations: [
    AppComponent,
    UserDemoComponent,
    UserDemoInjectorComponent,
    AnalyticsDemoComponent
  ],
  imports: [
    BrowserModule,
    UserDemoModule,
    AnalyticsDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
