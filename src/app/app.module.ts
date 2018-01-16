import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { XoCompareComponent } from './xoCompare.component';
import { SquaredMirrorComponent } from './squaredMirror.component';


@NgModule({
  declarations: [
    AppComponent, XoCompareComponent, SquaredMirrorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent, XoCompareComponent, SquaredMirrorComponent]
})
export class AppModule { }
