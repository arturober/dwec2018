import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss']
})
export class SearchbarPage implements OnInit {
  items: String[] = [
    'Banana',
    'Apple',
    'Pineapple',
    'Orange',
    'Melon',
    'Watermelon',
    'Peach',
    'Strawberry',
    'Gooseberry',
    'Blackberry',
    'Blueberry'
  ];
  filteredItems: String[];

  constructor() {}

  ngOnInit() {
    this.filteredItems = this.items;
  }

  filterItems(event) {
    let search: string = event.target.value;

    if (search && search.trim() !== '') {
      search = search.trim().toLowerCase();
      this.filteredItems = this.items.filter(i =>
        i.toLowerCase().includes(search)
      );
    } else {
      this.filteredItems = this.items;
    }
  }
}
