import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { NumericIdGuard } from '../guards/numeric-id.guard';
import { CanDeactivateGuard } from '../guards/can-deactivate.guard';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailResolve } from './resolvers/product-detail-resolve.service';

const routes: Routes = [
  { path: '', component: ProductListComponent,
    data: {animation: 'productList'}
  },
  {
    path: 'add',
    component: ProductFormComponent,
    canDeactivate: [CanDeactivateGuard],
    data: {animation: 'productForm'}
  },
  {
    path: 'edit/:id',
    component: ProductFormComponent,
    canActivate: [NumericIdGuard],
    resolve: {
      product: ProductDetailResolve
    }
  },
  {
    path: ':id',
    component: ProductDetailComponent,
    canActivate: [NumericIdGuard],
    resolve: {
      product: ProductDetailResolve
    },
    data: {animation: 'productDetail'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
