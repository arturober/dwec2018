import { Component } from '@angular/core';

import { Platform, NavController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth/services/auth.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  menuDisabled = true;
  public appPages = [
    {
      title: 'Product list',
      url: '/products',
      icon: 'home'
    },
    {
      title: 'Add product',
      url: '/products/add',
      icon: 'add-circle'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private nav: NavController,
    private oneSignal: OneSignal,
    private toastCtrl: ToastController
  ) {
    this.initializeApp();
    this.authService.loginChange$.subscribe(
      logged => this.menuDisabled = !logged
    );
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      this.oneSignal.startInit('4a6a9240-4cb2-400d-8fea-a9647e951581', '710692714196');
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
      this.oneSignal.handleNotificationOpened().subscribe(
        notif => {
          if (notif.notification.payload.additionalData.prodId) {
            this.nav.navigateForward([`/products/details/${notif.notification.payload.additionalData.prodId}/comments`]);
          }
        }
      );
      this.oneSignal.handleNotificationReceived().subscribe(
        async notif => {
          console.log(notif);
          if (!notif.shown) { // The user did not see the notification
            const toast = await this.toastCtrl.create({
              duration: 2000,
              position: 'bottom',
              message: notif.payload.title
            });
            toast.present();
          }
        }
      );
      this.oneSignal.endInit();
    });
  }

  async logout() {
    await this.authService.logout();
    this.nav.navigateRoot(['/auth/login']);
  }
}
