import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { XoCompareComponent } from './xoCompare.component';
import { SquaredMirrorComponent } from './squaredMirror.component';
import { PinCodeComponent } from './pinCode.component';


@NgModule({
  declarations: [
    AppComponent, XoCompareComponent, SquaredMirrorComponent, PinCodeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent, XoCompareComponent, SquaredMirrorComponent, PinCodeComponent]
})
export class AppModule { }
