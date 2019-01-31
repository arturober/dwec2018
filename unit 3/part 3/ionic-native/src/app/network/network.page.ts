import { Component, OnInit, NgZone } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit {
  type = 'none';
  connected = false;

  constructor(public network: Network, private zone: NgZone) { }

  ngOnInit() {
    this.getConnection();
    this.network.onchange().subscribe(() => {
      console.log('Connection changed!');
      this.getConnection();
    });
  }

  getConnection() {
    this.zone.run(() => {
      this.type = this.network.type;
      this.connected = this.type !== 'none';
    });
  }
}
