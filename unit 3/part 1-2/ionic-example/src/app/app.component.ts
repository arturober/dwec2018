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
      title: 'Gestures',
      url: '/gestures',
      icon: 'hand'
    },
    {
      title: 'Horizontal Scroll',
      url: '/horizontal-scroll',
      icon: 'arrow-dropright-circle'
    },
    {
      title: 'Infinite Scroll',
      url: '/infinite-scroll',
      icon: 'infinite'
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
      title: 'Range',
      url: '/range',
      icon: 'pin'
    },
    {
      title: 'Refresher',
      url: '/refresher',
      icon: 'refresh-circle'
    },
    {
      title: 'Reorder',
      url: '/reorder',
      icon: 'reorder'
    },
    {
      title: 'Searchbar',
      url: '/searchbar',
      icon: 'search'
    },
    {
      title: 'Segments',
      url: '/segments',
      icon: 'bookmarks'
    },
    {
      title: 'Select',
      url: '/select',
      icon: 'checkbox'
    },
    {
      title: 'Slides',
      url: '/slides',
      icon: 'images'
    },
    {
      title: 'Tabs',
      url: '/tabs',
      icon: 'logo-buffer'
    },
    {
      title: 'Toast',
      url: '/toast',
      icon: 'alarm'
    },
    {
      title: 'Toolbars',
      url: '/toolbars',
      icon: 'browsers'
    },
    {
      title: 'Virtual Scroll',
      url: '/virtual-scroll',
      icon: 'fastforward'
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
