import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgwWowModule } from 'ngx-wow';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { UiSwitchModule } from 'ngx-ui-switch';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailService } from './services/email.service';
import { DownloadService } from './services/download.service';
import { ToastrModule } from 'ngx-toastr';

const firebaseConfig = {
  apiKey: "AIzaSyC0CMoBF7hr_NNqJVN3ARme_i4zGfgCSN4",
  authDomain: "max-pok.firebaseapp.com",
  projectId: "max-pok",
  storageBucket: "max-pok.appspot.com",
  messagingSenderId: "239956407017",
  appId: "1:239956407017:web:4c47b4dd8443ca4806b678"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule,
    NgwWowModule,
    UiSwitchModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
    NgCircleProgressModule.forRoot({
      "radius": 50,
      "space": -6,
      "outerStrokeWidth": 6,
      "outerStrokeColor": "#0bceaf",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#828282",
      "innerStrokeWidth": 6,
      "titleColor": "#ebebeb",
      "unitsColor": "#ebebeb",
      "unitsFontSize": "20",
      "animateTitle": false,
      "showSubtitle": false,
      "animationDuration": 2000,
      "showTitle": true,
      "showUnits": true,
      "showBackground": true,
      "clockwise": true,
      "startFromZero": false,
      }),
      ToastrModule.forRoot({
        timeOut: 2000,
        positionClass: 'toast-bottom-center',
        tapToDismiss: true,
        newestOnTop: false
      })
  ],
  providers: [
    EmailService,
    DownloadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
