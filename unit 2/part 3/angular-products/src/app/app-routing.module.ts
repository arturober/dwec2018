import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { NumericIdGuard } from './guards/numeric-id.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { ProductDetailResolve } from './resolvers/product-detail-resolve.service';

const routes: Route[] = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'products', component: ProductListComponent},
  { path: 'products/add', component: ProductFormComponent},
  {
    path: 'products/edit/:id',
    component: ProductFormComponent,
    canActivate: [NumericIdGuard],
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    canActivate: [NumericIdGuard],
    resolve: {
      product: ProductDetailResolve
    }
  },
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
