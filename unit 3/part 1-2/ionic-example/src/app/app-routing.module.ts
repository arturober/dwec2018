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
  { path: 'check-radio-toggle', loadChildren: './check-radio-toggle/check-radio-toggle.module#CheckRadioTogglePageModule' },
  { path: 'badges-chips', loadChildren: './badges-chips/badges-chips.module#BadgesChipsPageModule' },
  { path: 'toast', loadChildren: './toast/toast.module#ToastPageModule' },
  { path: 'alert', loadChildren: './alert/alert.module#AlertPageModule' },
  { path: 'action-sheet', loadChildren: './action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'fabs', loadChildren: './fabs/fabs.module#FabsPageModule' },
  { path: 'loading', loadChildren: './loading/loading.module#LoadingPageModule' },
  { path: 'popover', loadChildren: './popover/popover.module#PopoverPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
