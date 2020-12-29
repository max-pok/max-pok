import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgwWowModule } from 'ngx-wow';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule,
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
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
