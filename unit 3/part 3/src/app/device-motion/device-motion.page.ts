import { Component, OnInit } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation/ngx';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-device-motion',
  templateUrl: './device-motion.page.html',
  styleUrls: ['./device-motion.page.scss'],
})
export class DeviceMotionPage {
  isSubscribed = false;
  isSubscribed2 = false;
  subscription: Subscription;
  subscription2: Subscription;
  acceleration: DeviceMotionAccelerationData;
  orientation: DeviceOrientationCompassHeading;

  constructor(private devMotion: DeviceMotion, private devOrientation: DeviceOrientation) { }

  startMotion() {
    this.subscription = this.devMotion.watchAcceleration({frequency: 1000})
      .subscribe((acceleration: DeviceMotionAccelerationData) => {
        this.acceleration = acceleration;
      });

    this.isSubscribed = true;
  }

  stopMotion() {
    if (this.subscription) { this.subscription.unsubscribe(); }

    this.isSubscribed = false;
  }

  startOrientation() {
    this.subscription2 = this.devOrientation.watchHeading({frequency: 1000})
      .subscribe((orientation: DeviceOrientationCompassHeading) => {
        this.orientation = orientation;
      });

    this.isSubscribed2 = true;
  }

  stopOrientation() {
    if (this.subscription2) { this.subscription2.unsubscribe(); }

    this.isSubscribed2 = false;
  }

}
