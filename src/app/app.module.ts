import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { xoCompareComponent } from './xoCompare.component';
import { squaredMirrorComponent } from './squaredMirror.component';


@NgModule({
  declarations: [
    AppComponent, xoCompareComponent, squaredMirrorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent, xoCompareComponent, squaredMirrorComponent]
})
export class AppModule { }
