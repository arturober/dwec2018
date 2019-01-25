import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PopoverPage } from './popover.page';
import { PopoverContentComponent } from './popover-content.component';

const routes: Routes = [
  {
    path: '',
    component: PopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PopoverPage, PopoverContentComponent],
  entryComponents: [PopoverContentComponent]
})
export class PopoverPageModule {}
