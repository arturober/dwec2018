import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinDateValidator } from './validators/min-date.validator';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  declarations: [
    MinDateValidator,
    StarRatingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MinDateValidator,
    StarRatingComponent
  ]
})
export class SharedModule { }
