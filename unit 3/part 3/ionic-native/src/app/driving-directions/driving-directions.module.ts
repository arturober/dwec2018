import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DrivingDirectionsPage } from './driving-directions.page';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

const routes: Routes = [
  {
    path: '',
    component: DrivingDirectionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxMapboxGLModule
  ],
  declarations: [DrivingDirectionsPage]
})
export class DrivingDirectionsPageModule {}
