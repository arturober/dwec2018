import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiYXJ0dXJvYmVyIiwiYSI6ImNqb2l2ZDFhZTA0azkzcHAyMGprcm04a3MifQ.2YFN4pXKpQmAPuVgLExW1w'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
