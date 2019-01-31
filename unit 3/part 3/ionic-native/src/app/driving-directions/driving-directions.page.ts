import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { MapComponent } from 'ngx-mapbox-gl';

@Component({
  selector: 'app-driving-directions',
  templateUrl: './driving-directions.page.html',
  styleUrls: ['./driving-directions.page.scss'],
})
export class DrivingDirectionsPage implements AfterViewInit {
  lat = 38.289257;
  lng = -0.558296;
  zoom = 15;
  @ViewChild(MapComponent) mapComp: MapComponent;

  constructor(private launchNavigator: LaunchNavigator) { }

  ngAfterViewInit() {
    this.mapComp.load.subscribe(
      () => {
        console.log(this.mapComp);
        console.log(this.mapComp.mapInstance);
        this.mapComp.mapInstance.resize(); // Necessary for full height
      }
    );
  }

  async navigate() {
    const options: LaunchNavigatorOptions = {};

    await this.launchNavigator.navigate([this.lat, this.lng], options);
  }
}
