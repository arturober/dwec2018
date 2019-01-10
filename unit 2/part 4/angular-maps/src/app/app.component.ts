import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lat = 38.4039418;
  lng = -0.5288701;
  zoom = 17;
  title = 'angular-maps';
}
