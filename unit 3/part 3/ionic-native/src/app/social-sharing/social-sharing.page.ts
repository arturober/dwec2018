import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-social-sharing',
  templateUrl: './social-sharing.page.html',
  styleUrls: ['./social-sharing.page.scss'],
})
export class SocialSharingPage {
  message = '';

  constructor(private socialSharing: SocialSharing) { }

  share() {
    this.socialSharing.shareViaWhatsApp(this.message, null, null);
  }
}
