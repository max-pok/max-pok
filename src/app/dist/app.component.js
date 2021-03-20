"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AppComponent = /** @class */ (function () {
    function AppComponent(wowService, emailService, downloadService) {
        this.wowService = wowService;
        this.emailService = emailService;
        this.downloadService = downloadService;
        this.title = 'max-pok';
        this.isScrolled = false;
        this.isDaytimeMode = true;
        this.isScrolledHome = false;
        this.isScrolledAbout = false;
        this.isScrolledSkills = false;
        this.isScrolledPortfolio = false;
        this.isScrolledContactMe = false;
        this.isNavbarCollapsed = true;
        this.currentSection = 'section1';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.wowService.init();
        this.initTheme();
        this.scrollEvent();
        this.form = new forms_1.FormGroup({
            name: new forms_1.FormControl('', [forms_1.Validators.required]),
            last_name: new forms_1.FormControl('', [forms_1.Validators.required]),
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            message: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    };
    AppComponent.prototype.initTheme = function () {
        var _this = this;
        var theme = window.matchMedia('(prefers-color-scheme: light)');
        theme.addEventListener('change', function () {
            _this.isDaytimeMode = window.matchMedia('(prefers-color-scheme: light)').matches;
        });
        this.isDaytimeMode = window.matchMedia('(prefers-color-scheme: light)').matches;
    };
    AppComponent.prototype.scroll = function (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        this.currentSection = el.className;
    };
    AppComponent.prototype.scrollEvent = function () {
        this.isScrolled = window.pageYOffset >= 70;
    };
    __decorate([
        core_1.HostListener('window:scroll', ['$event'])
    ], AppComponent.prototype, "scrollEvent");
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
