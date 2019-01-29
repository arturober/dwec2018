import { Component, OnInit } from '@angular/core';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.page.html',
  styleUrls: ['./image-picker.page.scss'],
})
export class ImagePickerPage {
  images = [];

  constructor(private imagePicker: ImagePicker, private webView: WebView) { }

  async pickImages() {
    const options: ImagePickerOptions = {
      maximumImagesCount: 10,
      width: 640, // Max width (aspect ratio is preserved)
      height: 640, // Max height
    };

    const results = (await this.imagePicker.getPictures(options))
                    .map(file => this.webView.convertFileSrc(file));
    for (let i = 0; i < results.length; i++) {
      console.log('Image URI: ' + results[i]);
      this.images.push(results[i]);
    }
  }
}
