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
      icon: 'barcode'
    },
    {
      title: 'Camera',
      url: '/camera',
      icon: 'camera'
    },
    {
      title: 'Driving directions',
      url: '/driving-directions',
      icon: 'navigate'
    },
    {
      title: 'Facebook Login',
      url: '/facebook-login',
      icon: 'logo-facebook'
    },
    {
      title: 'Flash',
      url: '/flash',
      icon: 'flashlight'
    },
    {
      title: 'Geolocation',
      url: '/geolocation',
      icon: 'pin'
    },
    {
      title: 'Google Login',
      url: '/google-login',
      icon: 'logo-googleplus'
    },
    {
      title: 'Image Picker',
      url: '/image-picker',
      icon: 'images'
    },
    {
      title: 'Local notifications',
      url: '/local-notifications',
      icon: 'notifications'
    },
    {
      title: 'Motion & Orientation',
      url: '/device-motion',
      icon: 'move'
    },
    {
      title: 'Network',
      url: '/network',
      icon: 'wifi'
    },
    {
      title: 'Social sharing',
      url: '/social-sharing',
      icon: 'share'
    },
    {
      title: 'SQLite',
      url: '/sqlite',
      icon: 'grid'
    },
    {
      title: 'Vibration',
      url: '/vibration',
      icon: 'pulse'
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
