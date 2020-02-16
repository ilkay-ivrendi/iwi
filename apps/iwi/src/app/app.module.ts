import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { iwiUIModule } from '@ivrenditech/iwi-ui';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, iwiUIModule, IonicModule.forRoot() ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
