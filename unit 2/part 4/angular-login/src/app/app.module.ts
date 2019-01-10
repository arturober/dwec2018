import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoogleLoginModule } from './google-login/google-login.module';
import { FacebookLoginModule } from './facebook-login/facebook-login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GoogleLoginModule.forRoot('557331834920-vj2qta552qlmdbdsm5meh1lpl0dd2sod.apps.googleusercontent.com'),
    FacebookLoginModule.forRoot({
      app_id: '264506843964721',
      version: 'v3.2'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
