import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async showToast() {
    const toast = await this.toastCtrl.create({
      message: 'I\'m a toast message',
      duration: 2000, // 2 seconds
      position: 'middle',
      color: 'dark'
    });

    await toast.present();
  }
}
