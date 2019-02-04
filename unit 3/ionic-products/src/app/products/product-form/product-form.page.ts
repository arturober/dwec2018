import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ProductService } from '../services/product.service';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.page.html',
  styleUrls: ['./product-form.page.scss'],
})
export class ProductFormPage implements OnInit {
  newProd: Product = {
    description: '',
    price: 0,
    imageUrl: ''
  };

  constructor(
    private productService: ProductService,
    private camera: Camera,
    private toastCtrl: ToastController,
    private nav: NavController
  ) { }

  ngOnInit() {
  }

  addProduct() {
    this.productService.addProduct(this.newProd).subscribe(
      async prod => {
        (await this.toastCtrl.create({
          position: 'bottom',
          duration: 3000,
          message: 'Product added succesfully',
          color: 'success'
        })).present();
        this.nav.navigateRoot(['/products']);
      },
      async error => (await this.toastCtrl.create({
        position: 'bottom',
        duration: 3000,
        message: 'Error adding product'
      })).present()
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
    this.newProd.imageUrl = 'data:image/jpeg;base64,' + imageData;
  }
}
