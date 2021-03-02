import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { firebateConfig } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { HttpClientModule } from "@angular/common/http";

import { Camera } from '@ionic-native/camera/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { File} from "@ionic-native/file/ngx";



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebateConfig),
    AngularFireAuthModule, HttpClientModule, IonicStorageModule.forRoot()
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy} ,Camera, File],
  bootstrap: [AppComponent],
})
export class AppModule {}
