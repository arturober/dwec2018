import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
      { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
      { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
      { path: '', pathMatch: 'full', redirectTo: '/tabs/tab1'}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}