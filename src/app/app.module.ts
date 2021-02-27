// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouteReuseStrategy } from '@angular/router';

// import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { GMapComponent } from './gmap/gmap.component';
// import firebase from 'firebase/app';
// import { environment } from '../environments/environment';
// import { AgmDirectionModule } from 'agm-direction';
// export const firebaseConfig = environment.firebaseConfig;

// import { AgmCoreModule } from '@agm/core';
// import { UserService } from './user.service';
// import { GeoService } from './geo.service';
// firebase.initializeApp(firebaseConfig);

// @NgModule({
//   declarations: [AppComponent],
//   entryComponents: [],
//   imports: [
//     BrowserModule,
//     IonicModule.forRoot(),
//     AppRoutingModule,
//     AngularFireModule.initializeApp(firebaseConfig),
//     AngularFireAuthModule,
//     AngularFirestoreModule,
//     AgmCoreModule.forRoot({
//       apiKey: environment.googleMapsKey,
//     }),
//     AgmDirectionModule,
//   ],
//   providers: [
//     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
//     UserService,
//     GeoService,
//     GMapComponent,
//   ],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { GMapComponent } from './gmap/gmap.component';
import firebase from 'firebase/app';
import {
  GoogleMapsAPIWrapper,
  InfoWindowManager,
  MarkerManager,
} from '@agm/core';
import { environment } from '../environments/environment';
// import { AgmDirectionModule } from 'agm-direction'
export const firebaseConfig = environment.firebaseConfig;

import { AgmCoreModule } from '@agm/core';
import { from } from 'rxjs';
import { UserService } from './user.service';
import { GeoService } from './geo.service';
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  // schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey,
    }),
    // AgmDirectionModule,
    // UserService,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserService,
    GeoService,
    GMapComponent,
    GoogleMapsAPIWrapper,
    MarkerManager,
    InfoWindowManager,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
