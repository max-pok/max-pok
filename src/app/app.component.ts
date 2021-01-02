import { NgwWowService } from 'ngx-wow';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
declare const test: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'max-pok';
  isScrolled = false;
  isScrolledHome = false;
  isScrolledAbout = false;
  isScrolledSkills = false;
  isScrolledPortfolio = false;

  constructor(private router: Router, private wowService: NgwWowService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
      this.wowService.init(); 
    });
  }

  scroll(el: HTMLElement): void {
    el.scrollIntoView({behavior: 'smooth'});
  }

  @HostListener("window:scroll", ['$event'])
  scrollEvent($event: any) {
    this.isScrolled = window.pageYOffset >= 80;
    this.isScrolledHome = window.pageYOffset >= -5 && window.pageYOffset <= 400;
    this.isScrolledAbout = window.pageYOffset > 400 && window.pageYOffset <= 1200;
    this.isScrolledSkills = window.pageYOffset > 1200 && window.pageYOffset <= 3000;
    this.isScrolledPortfolio = window.pageYOffset > 3000 && window.pageYOffset <= 5000;
  }
}
