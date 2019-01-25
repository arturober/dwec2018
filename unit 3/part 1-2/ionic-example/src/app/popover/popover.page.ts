import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverContentComponent } from './popover-content.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async showPopover(event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverContentComponent,
      componentProps: {
        title: 'Choose a color'
      },
      event: event
    });

    await popover.present();
    const result = await popover.onDidDismiss();
    console.log(result.data);
  }
}
