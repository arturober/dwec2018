import { Component, OnInit } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-facebook-login',
  templateUrl: './facebook-login.page.html',
  styleUrls: ['./facebook-login.page.scss'],
})
export class FacebookLoginPage implements OnInit {
  accessToken = '';

  constructor(public fb: Facebook) { }

  async ngOnInit() {
    const resp = await this.fb.getLoginStatus();
    if (resp.status === 'connected') {
      this.accessToken = resp.authResponse.accessToken;
    }
  }

  async login() {
    const resp = await this.fb.login(['public_profile', 'email']);
    if (resp.status === 'connected') {
      this.accessToken = resp.authResponse.accessToken;
    }
  }

  async logout() {
    await this.fb.logout();
    this.accessToken = '';
  }

}
