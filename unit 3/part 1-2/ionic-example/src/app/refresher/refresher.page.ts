import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
  items = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {
    this.update();
  }

  update() {
    this.items = this.items.map(n => Math.round(Math.random() * 99 + 1));
  }

  refresh(event) {
    setTimeout(() => {
      this.update();
      event.target.complete();
    }, 2000);
  }
}
