import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Route[] = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'products', component: ProductListComponent},
  { path: 'products/add', component: ProductFormComponent},
  { path: 'products/:id', component: ProductDetailComponent},
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: '**', redirectTo: '/welcome', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [

  ]
})
export class AppRoutingModule { }
