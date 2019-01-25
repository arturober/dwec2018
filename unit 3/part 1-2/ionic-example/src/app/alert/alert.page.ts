import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  resp: string;
  foods: string;

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {}

  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Hello alert',
      subHeader: 'This is a simple alert',
      message: 'See the official documentation for more examples',
      buttons: [{
        text: 'Ok',
        handler: () => {
          return {ok: true};
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          return {ok: false};
        }
      }]
    });

    await alert.present();

    const resp = await alert.onDidDismiss();
    this.resp = resp.data && resp.data.ok ? 'You said Ok!' : 'You cancelled...';
  }

  async showAlert2() {
    const alert = await this.alertCtrl.create({
      header: 'Select an option',
      inputs: [
        {
          name: 'pizza',
          type: 'checkbox',
          value: 'pizza',
          label: 'Pizza'
        },
        {
          name: 'hamburguer',
          type: 'checkbox',
          value: 'hamburguer',
          label: 'Hamburguer'
        },
        {
          name: 'spaghetti',
          type: 'checkbox',
          value: 'spaghetti',
          label: 'Spaghetti'
        },
        {
          name: 'chicken',
          type: 'checkbox',
          value: 'chicken',
          label: 'Chicken'
        },
      ],
      buttons: ['Ok', 'Cancel']
    });

    await alert.present();

    const resp = await alert.onDidDismiss();
    if (resp.role !== 'cancel') {
      this.foods = resp.data.values.toString();
    }
  }

}
