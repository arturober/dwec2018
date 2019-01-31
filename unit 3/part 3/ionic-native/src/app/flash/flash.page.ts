import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.page.html',
  styleUrls: ['./flash.page.scss'],
})
export class FlashPage {
  on = false;

  constructor(public flash: Flashlight) { }

  async toggleFlash() {
    await this.flash.toggle();
    this.on = this.flash.isSwitchedOn();
  }
}
