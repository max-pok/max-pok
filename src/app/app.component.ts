import { NgwWowService } from 'ngx-wow';
import { Component, HostListener, OnInit } from '@angular/core';
declare const test: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'max-pok';
  isScrolled = false;
  isScrolledHome = false;
  isScrolledAbout = false;
  isScrolledSkills = false;
  isScrolledPortfolio = false;
  isScrolledContactMe = false;

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  ngOnInit(): void {    
  }

  scroll(el: HTMLElement): void {
    el.scrollIntoView({behavior: 'smooth'});
  }

  @HostListener("window:scroll", ['$event'])
  scrollEvent($event: any) {
    this.isScrolled = window.pageYOffset >= 80;
    this.isScrolledHome = window.pageYOffset >= -50 && window.pageYOffset <= 400;
    this.isScrolledAbout = window.pageYOffset > 400 && window.pageYOffset <= 1200;
    this.isScrolledSkills = window.pageYOffset > 1200 && window.pageYOffset <= 3000;
    this.isScrolledPortfolio = window.pageYOffset > 3000 && window.pageYOffset <= 4000;
    this.isScrolledContactMe = window.pageYOffset > 4000;
  }
}
