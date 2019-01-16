import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit, OnChanges {
  @Input() rating: number;
  auxRating: number;
  @Output() changeRating = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.auxRating = this.rating;
  }

  // This method is called when @Input properties change (rating)
  ngOnChanges() {
    this.auxRating = this.rating;
  }

  change() {
    this.changeRating.emit(this.auxRating);
  }

}
