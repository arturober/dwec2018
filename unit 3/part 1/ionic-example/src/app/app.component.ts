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
      title: 'Buttons',
      url: '/buttons',
      icon: 'albums'
    },
    {
      title: 'Lists',
      url: '/lists',
      icon: 'list'
    },
    {
      title: 'Inputs',
      url: '/inputs',
      icon: 'logo-buffer'
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
