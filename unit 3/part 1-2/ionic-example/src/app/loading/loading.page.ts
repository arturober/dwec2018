import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  info = '';

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async loadInfo() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait…',
    });

    await loading.present();
    // Web service call, etc..
    setTimeout(() => {
      this.info = 'Info loaded.';
      loading.dismiss();
    }, 2000);
  }
}
