import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.page.html',
  styleUrls: ['./horizontal-scroll.page.scss'],
})
export class HorizontalScrollPage {
  icons: string[] = [
    'alert', 'albums', 'alarm', 'analytics', 'logo-angular', 'logo-apple',
    'appstore', 'archive', 'at', 'baseball', 'basket', 'battery-charging',
    'beer', 'bicycle', 'logo-bitcoin', 'boat'
  ];
}
