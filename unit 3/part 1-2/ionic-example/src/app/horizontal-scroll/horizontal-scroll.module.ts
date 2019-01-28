import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HorizontalScrollPage } from './horizontal-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: HorizontalScrollPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HorizontalScrollPage]
})
export class HorizontalScrollPageModule {}
