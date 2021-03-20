"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ScrollSpyDirective = void 0;
var core_1 = require("@angular/core");
var ScrollSpyDirective = /** @class */ (function () {
    function ScrollSpyDirective(_el) {
        this._el = _el;
        this.spiedTags = [];
        this.sectionChange = new core_1.EventEmitter();
        this.currentSection = '';
    }
    ScrollSpyDirective.prototype.onScroll = function ($event) {
        var currentSection = '';
        var children = this._el.nativeElement.children;
        var scrollTop = $event.target.scrollTop;
        var parentOffset = $event.target.offsetTop;
        var _loop_1 = function (i) {
            var element = children[i];
            if (this_1.spiedTags.some(function (spiedTag) { return spiedTag === element.tagName; })) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < children.length; i++) {
            _loop_1(i);
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
        console.log(this.currentSection);
    };
    __decorate([
        core_1.Input()
    ], ScrollSpyDirective.prototype, "spiedTags");
    __decorate([
        core_1.Output()
    ], ScrollSpyDirective.prototype, "sectionChange");
    __decorate([
        core_1.HostListener('window:scroll', ['$event'])
    ], ScrollSpyDirective.prototype, "onScroll");
    ScrollSpyDirective = __decorate([
        core_1.Directive({
            selector: '[scrollSpy]'
        })
    ], ScrollSpyDirective);
    return ScrollSpyDirective;
}());
exports.ScrollSpyDirective = ScrollSpyDirective;
