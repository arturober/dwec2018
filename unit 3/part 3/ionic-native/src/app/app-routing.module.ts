import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vibration',
    pathMatch: 'full'
  },
  { path: 'vibration', loadChildren: './vibration/vibration.module#VibrationPageModule' },
  { path: 'geolocation', loadChildren: './geolocation/geolocation.module#GeolocationPageModule' },
  { path: 'camera', loadChildren: './camera/camera.module#CameraPageModule' },
  { path: 'barcode', loadChildren: './barcode/barcode.module#BarcodePageModule' },
  { path: 'device-motion', loadChildren: './device-motion/device-motion.module#DeviceMotionPageModule' },
  { path: 'local-notifications', loadChildren: './local-notifications/local-notifications.module#LocalNotificationsPageModule' },
  { path: 'sqlite', loadChildren: './sqlite/sqlite.module#SqlitePageModule' },
  { path: 'google-login', loadChildren: './google-login/google-login.module#GoogleLoginPageModule' },
  { path: 'facebook-login', loadChildren: './facebook-login/facebook-login.module#FacebookLoginPageModule' },
  { path: 'image-picker', loadChildren: './image-picker/image-picker.module#ImagePickerPageModule' },
  { path: 'social-sharing', loadChildren: './social-sharing/social-sharing.module#SocialSharingPageModule' },
  { path: 'driving-directions', loadChildren: './driving-directions/driving-directions.module#DrivingDirectionsPageModule' },
  { path: 'flash', loadChildren: './flash/flash.module#FlashPageModule' },
  { path: 'network', loadChildren: './network/network.module#NetworkPageModule' },
  { path: 'gestures', loadChildren: './gestures/gestures.module#GesturesPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
