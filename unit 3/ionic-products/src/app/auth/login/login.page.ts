import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { Firebase } from '@ionic-native/firebase/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private oneSignal: OneSignal,
    private platform: Platform
  ) {}

  ngOnInit() {
  }

  async login() {
    const oneSignalId = (await this.oneSignal.getIds()).userId;

    this.authService.login(this.email, this.password, oneSignalId).subscribe(
      () => this.router.navigate(['/products']),
      async error => {
        (await this.alertCtrl.create({
          header: 'Login error',
          message: 'Incorrect email and/or password',
          buttons: ['Ok']
        })).present();
      }
    );
  }
}
