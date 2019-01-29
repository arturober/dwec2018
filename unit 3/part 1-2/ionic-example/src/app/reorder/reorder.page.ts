import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage {
  foods: string[] = [
    'Pizza', 'Banana', 'Hamburguer', 'Soup', 'Steak', 'Apple'
  ];
  disableOrdering = true;

  reorder(event: CustomEvent) {
    const elemFrom = this.foods.splice(event.detail.from, 1);
    this.foods.splice(event.detail.to, 0, elemFrom[0]);
    event.detail.complete();
  }

  toggleReordering() {
    this.disableOrdering = !this.disableOrdering;
  }
}
