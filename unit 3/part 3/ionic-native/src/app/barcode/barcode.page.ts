import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
})
export class BarcodePage {
  data = '';

  constructor(private bcScanner: BarcodeScanner) { }

  async scan() {
    this.data = (await this.bcScanner.scan()).text;
  }
}
