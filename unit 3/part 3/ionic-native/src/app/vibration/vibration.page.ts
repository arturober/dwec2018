import { Component, OnInit } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-vibration',
  templateUrl: './vibration.page.html',
  styleUrls: ['./vibration.page.scss'],
})
export class VibrationPage {

  constructor(private vibration: Vibration) { }

  vibrate() {
    this.vibration.vibrate(1000);
  }

  vibrate2() {
    // 0,5s vibrate, 0,5s pause, 1s vibrate
    this.vibration.vibrate([500, 500, 1000]);
  }

}
