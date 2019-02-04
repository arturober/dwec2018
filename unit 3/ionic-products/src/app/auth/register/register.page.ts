import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthService } from '../services/auth.service';
import { ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user = {
    name: '',
    password: '',
    email: '',
    avatar: ''
  };
  password2 = '';

  constructor(
    private authService: AuthService,
    private camera: Camera,
    private toast: ToastController,
    private nav: NavController
  ) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.user).subscribe(
      async () => {
        (await this.toast.create({
          duration: 3000,
          position: 'bottom',
          message: 'User registered!'
        })).present();
        this.nav.navigateRoot(['/auth/login']);
      }
    );
  }

  async takePhoto() {
    const options: CameraOptions = {
      targetWidth: 640, // max width 640px
      targetHeight: 640, // max height 640px
      allowEdit: true,
      destinationType: this.camera.DestinationType.DATA_URL // Base64
    };

    await this.getPicture(options);
  }

  async pickFromGallery() {
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      targetWidth: 640, // max width 640px
      targetHeight: 640, // max height 640px
      allowEdit: true,
      destinationType: this.camera.DestinationType.DATA_URL // Base64
    };

    await this.getPicture(options);
  }

  private async getPicture(options: CameraOptions) {
    const imageData = await this.camera.getPicture(options);
    this.user.avatar = 'data:image/jpeg;base64,' + imageData;
  }
}
