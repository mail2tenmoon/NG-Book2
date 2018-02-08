import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ProductsComponent } from './products.component';
import { MainComponent } from './main/main.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'more-info', component: MoreInfoComponent },
  { path: ':id', component: ProductComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ProductsComponent, MainComponent, MoreInfoComponent, ProductComponent],

})
export class ProductsModule { }

