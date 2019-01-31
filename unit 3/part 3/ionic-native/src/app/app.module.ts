import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Vibration } from '@ionic-native/vibration/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { DeviceMotion } from '@ionic-native/device-motion/ngx';
import { DeviceOrientation } from '@ionic-native/device-orientation/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Network } from '@ionic-native/network/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiYXJ0dXJvYmVyIiwiYSI6ImNqb2l2ZDFhZTA0azkzcHAyMGprcm04a3MifQ.2YFN4pXKpQmAPuVgLExW1w'
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Vibration,
    BarcodeScanner,
    Camera,
    DeviceMotion,
    DeviceOrientation,
    Geolocation,
    LocalNotifications,
    SQLite,
    GooglePlus,
    Facebook,
    ImagePicker,
    WebView,
    LaunchNavigator,
    Flashlight,
    Network,
    SocialSharing
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
