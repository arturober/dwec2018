import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.page.html',
  styleUrls: ['./google-login.page.scss'],
})
export class GoogleLoginPage implements OnInit {
  isLogged = false;
  response = null;

  constructor(public gplus: GooglePlus) { }

  async ngOnInit() {
    try {
      // Check if we are logged in.
      // webClientId is the web clientID from google developer console
      const res = await this.gplus.trySilentLogin({
        webClientId: '557331834920-vj2qta552qlmdbdsm5meh1lpl0dd2sod.apps.googleusercontent.com'
      });
      this.response = res;
      this.isLogged = true;
    } catch (e) {
      console.error(e);
    }
  }

  async login() {
    try {
    const res = await this.gplus.login({'webClientId': '557331834920-vj2qta552qlmdbdsm5meh1lpl0dd2sod.apps.googleusercontent.com'});
      this.response = res;
      this.isLogged = true;
    } catch (err) {
      console.error(err);
    }
  }

  async logout() {
    try {
      await this.gplus.logout();
      this.isLogged = false;
    } catch (err) {
      console.error(err);
    }
  }

  async disconnect() {
    try {
      await this.gplus.disconnect();
      this.isLogged = false;
    } catch (err) {
      console.error(err);
    }
  }

}
