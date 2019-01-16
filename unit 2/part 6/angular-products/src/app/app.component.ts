import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  group
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('productList => productDetail', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' })),
        query(':enter', style({ transform: 'translateX(100%)' })),
        group([
          query(':leave', [
            animate('0.5s ease-out', style({ transform: 'translateX(-100%)' }))
          ]),
          query(':enter', [animate('0.5s ease-out', style({ transform: 'none' }))])
        ])
      ]),
      transition('productDetail => productList', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' })),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        group([
          query(':leave', [
            animate('0.5s ease-out', style({ transform: 'translateX(100%)' }))
          ]),
          query(':enter', [animate('0.5s ease-out', style({ transform: 'none' }))])
        ])
      ])
    ])
  ]
})
export class AppComponent {
  getState(routerOutlet: RouterOutlet) {
    // Returns the page animation name (or 'None' of it has no animation)
    return routerOutlet.activatedRouteData.animation || 'None';
  }
}
