import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular products!!!!';
  name = 'Arturo';
  showHello = false;

  toggleHello() {
    this.showHello = !this.showHello;
  }
}
