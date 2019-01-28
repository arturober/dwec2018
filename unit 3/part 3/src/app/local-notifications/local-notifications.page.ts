import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-local-notifications',
  templateUrl: './local-notifications.page.html',
  styleUrls: ['./local-notifications.page.scss'],
})
export class LocalNotificationsPage {
  message = '';
  triggered = false;
  scheduled = false;

  constructor(private localNotifications: LocalNotifications) { }

  createNotification() {
    this.localNotifications.schedule({
      id: 1, // Unique id
      text: this.message,
      trigger: {at: new Date(new Date().getTime() + 10000)},
      led: '0000FF', // Blue led
      sound: null,
    });
    this.scheduled = true;
    this.triggered = false;

    this.localNotifications.on('trigger').subscribe(e => {
      this.triggered = true;
      this.scheduled = false;
    });
  }

  cancelNotification() {
    this.localNotifications.cancel(1);
    this.scheduled = false;
  }

}
