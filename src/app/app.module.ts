import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';

import { IonicStorageModule } from '@ionic/storage'; // insert storge 

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';// insert Translate
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { Camera } from '@ionic-native/camera/';

import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/Login/Login';
import { CapturePhotoPage } from '../pages/capture-photo/capture-photo';
import { SettingsPage } from '../pages/settings/settings';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';




export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CapturePhotoPage,
    SettingsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),// insert storge 

    HttpClientModule,
    TranslateModule.forRoot({ //insert il8n
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicPageModule.forChild(HomePage),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CapturePhotoPage,
    SettingsPage


  ],
  providers: [
    Diagnostic,
    AndroidPermissions,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Camera
  ],
  exports: [
    HomePage,
    SettingsPage
  ]

})
export class AppModule {

}
