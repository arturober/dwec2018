import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CheckRadioTogglePage } from './check-radio-toggle.page';

const routes: Routes = [
  {
    path: '',
    component: CheckRadioTogglePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CheckRadioTogglePage]
})
export class CheckRadioTogglePageModule {}
