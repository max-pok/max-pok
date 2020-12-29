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
  }
}
