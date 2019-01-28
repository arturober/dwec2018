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
  { path: 'popover', loadChildren: './popover/popover.module#PopoverPageModule' },
  { path: 'range', loadChildren: './range/range.module#RangePageModule' },
  { path: 'refresher', loadChildren: './refresher/refresher.module#RefresherPageModule' },
  { path: 'infinite-scroll', loadChildren: './infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule' },
  { path: 'searchbar', loadChildren: './searchbar/searchbar.module#SearchbarPageModule' },
  { path: 'horizontal-scroll', loadChildren: './horizontal-scroll/horizontal-scroll.module#HorizontalScrollPageModule' },
  { path: 'reorder', loadChildren: './reorder/reorder.module#ReorderPageModule' },
  { path: 'segments', loadChildren: './segments/segments.module#SegmentsPageModule' },
  { path: 'select', loadChildren: './select/select.module#SelectPageModule' },
  { path: 'slides', loadChildren: './slides/slides.module#SlidesPageModule' },
  { path: 'toolbars', loadChildren: './toolbars/toolbars.module#ToolbarsPageModule' },
  { path: 'virtual-scroll', loadChildren: './virtual-scroll/virtual-scroll.module#VirtualScrollPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
