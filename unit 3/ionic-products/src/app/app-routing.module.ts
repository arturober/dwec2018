import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginActivateGuard } from './guards/login-activate.guard';
import { LogoutActivateGuard } from './guards/logout-activate.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule', canActivate: [LogoutActivateGuard] },
  { path: 'products', loadChildren: './products/products.module#ProductsModule', canActivate: [LoginActivateGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
