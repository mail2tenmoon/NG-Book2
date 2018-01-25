import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// import {
//   routes as childRoutes,
//   ProductsModule
// } from './products/products.module';

import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },
  // { path: 'login', component: LoginComponent },
  // { path: 'protected', component: ProtectedComponent, canActivate: [LoggedInGuard] },
  // { path: 'products', component: ProductsComponent, children: childRoutes }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),

    // ProductsModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    // Same as <base href="/"> in HTML header
    // {provide: APP_BASE_HREF, useValue: '/'}
    // AUTH_PROVIDERS,
    // LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
