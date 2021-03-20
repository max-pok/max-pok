"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/common/http");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ngx_wow_1 = require("ngx-wow");
var ng_circle_progress_1 = require("ng-circle-progress");
var ngx_ui_switch_1 = require("ngx-ui-switch");
var fire_1 = require("@angular/fire");
var storage_1 = require("@angular/fire/storage");
var firestore_1 = require("@angular/fire/firestore");
var forms_1 = require("@angular/forms");
var email_service_1 = require("./services/email.service");
var download_service_1 = require("./services/download.service");
var ngx_toastr_1 = require("ngx-toastr");
var ng_bootstrap_2 = require("@ng-bootstrap/ng-bootstrap");
var environment_1 = require("src/environments/environment");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                angular_fontawesome_1.FontAwesomeModule,
                ng_bootstrap_1.NgbModule,
                ng_bootstrap_2.NgbCollapseModule,
                ngx_wow_1.NgwWowModule,
                ngx_ui_switch_1.UiSwitchModule,
                fire_1.AngularFireModule.initializeApp(environment_1.firebaseConfig),
                storage_1.AngularFireStorageModule,
                firestore_1.AngularFirestoreModule,
                ng_circle_progress_1.NgCircleProgressModule.forRoot({
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
                    "startFromZero": false
                }),
                ngx_toastr_1.ToastrModule.forRoot({
                    timeOut: 2000,
                    positionClass: 'toast-bottom-center',
                    tapToDismiss: true,
                    newestOnTop: false
                })
            ],
            providers: [
                email_service_1.EmailService,
                download_service_1.DownloadService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
