import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directives-example';
  color = 'red';
  numNames = 2;

  names: string[] = [
    'Peter', 'Mary', 'Louise', 'John', 'Frank', 'Anne', 'Betty', 'Marcus'
  ];
}
