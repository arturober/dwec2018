import { Input, Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
    selector: 'app-popover-content',
    template: `
      <ion-content>
        <ion-list>
          <ion-list-header>{{title}}</ion-list-header>
          <ion-item (click)="close('green')">
            <ion-label>Green</ion-label>
          </ion-item>
          <ion-item (click)="close('red')">
            <ion-label>Red</ion-label>
          </ion-item>
          <ion-item (click)="close('blue')">
            <ion-label>Blue</ion-label>
          </ion-item>
          <ion-item (click)="close('yellow')">
            <ion-label>Yellow</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    `
})
export class PopoverContentComponent {
  @Input() title;

  constructor(private popoverCtrl: PopoverController) { }

  close(color: string) {
    this.popoverCtrl.dismiss(color);
  }
}
