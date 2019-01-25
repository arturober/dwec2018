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
      title: 'Action Sheet',
      url: '/action-sheet',
      icon: 'menu'
    },
    {
      title: 'Alert',
      url: '/alert',
      icon: 'alert'
    },
    {
      title: 'Badges, Chips',
      url: '/badges-chips',
      icon: 'alert'
    },
    {
      title: 'Buttons',
      url: '/buttons',
      icon: 'albums'
    },
    {
      title: 'Cards',
      url: '/cards',
      icon: 'card'
    },
    {
      title: 'Check, Radio, Toggle',
      url: '/check-radio-toggle',
      icon: 'checkmark-circle-outline'
    },
    {
      title: 'Fabs',
      url: '/fabs',
      icon: 'add-circle'
    },
    {
      title: 'Inputs',
      url: '/inputs',
      icon: 'logo-buffer'
    },
    {
      title: 'Lists',
      url: '/lists',
      icon: 'list'
    },
    {
      title: 'Loading',
      url: '/loading',
      icon: 'refresh'
    },
    {
      title: 'Popover',
      url: '/popover',
      icon: 'albums'
    },
    {
      title: 'Toast',
      url: '/toast',
      icon: 'alarm'
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
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
