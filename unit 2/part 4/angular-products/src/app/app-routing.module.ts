import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Route[] = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'products', loadChildren: './products/products.module#ProductsModule'},
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: '**', redirectTo: '/welcome', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  declarations: [],
  exports: [

  ]
})
export class AppRoutingModule { }
