import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'buttons',
    pathMatch: 'full'
  },
  { path: 'buttons', loadChildren: './buttons/buttons.module#ButtonsPageModule' },
  { path: 'lists', loadChildren: './lists/lists.module#ListsPageModule' },
  { path: 'inputs', loadChildren: './inputs/inputs.module#InputsPageModule' },
  { path: 'cards', loadChildren: './cards/cards.module#CardsPageModule' },
  { path: 'check-radio-toggle', loadChildren: './check-radio-toggle/check-radio-toggle.module#CheckRadioTogglePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
