import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input() rating: number;
  auxRating: number;
  @Output() changeRating = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.auxRating = this.rating;
  }

  change() {
    this.changeRating.emit(this.auxRating);
  }

}
