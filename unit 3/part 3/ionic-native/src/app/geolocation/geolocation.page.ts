import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage {
  lat: number;
  lng: number;
  lat2: number;
  lng2: number;
  geoSubscription: Subscription = null;
  isSubscribed = false;

  constructor(public geolocation: Geolocation) { }

  async geolocate() {
    try {
      const data = await this.geolocation.getCurrentPosition();
      this.lat = data.coords.latitude;
      this.lng = data.coords.longitude;
    } catch (error) {
      console.error('Error getting location', error);
    }
  }

  startGeo() {
    this.geoSubscription = this.geolocation.watchPosition()
      .pipe(filter((data: any) => data.code === undefined))
      .subscribe(data => {
        this.lat2 = data.coords.latitude;
        this.lng2 = data.coords.longitude;
      });

    this.isSubscribed = true;
  }

  stopGeo() {
    if (this.geoSubscription) { this.geoSubscription.unsubscribe(); }
    this.isSubscribed = false;
  }
}
