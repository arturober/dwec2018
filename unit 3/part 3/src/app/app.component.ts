import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Barcode',
      url: '/barcode',
      icon: 'home'
    },
    {
      title: 'Camera',
      url: '/camera',
      icon: 'home'
    },
    {
      title: 'Geolocation',
      url: '/geolocation',
      icon: 'home'
    },
    {
      title: 'Google Login',
      url: '/google-login',
      icon: 'home'
    },
    {
      title: 'Local notifications',
      url: '/local-notifications',
      icon: 'home'
    },
    {
      title: 'Motion & Orientation',
      url: '/device-motion',
      icon: 'home'
    },
    {
      title: 'SQLite',
      url: '/sqlite',
      icon: 'home'
    },
    {
      title: 'Vibration',
      url: '/vibration',
      icon: 'home'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }
}
