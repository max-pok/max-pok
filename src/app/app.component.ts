import { NgwWowService } from 'ngx-wow';
import { Component, HostListener, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'max-pok';
  isScrolled = false;
  isDaytimeMode = true;
  isScrolledHome = false;
  isScrolledAbout = false;
  isScrolledSkills = false;
  isScrolledPortfolio = false;
  isScrolledContactMe = false;

  constructor(private wowService: NgwWowService, private afStorage: AngularFireStorage) {
  }

  ngOnInit(): void { 
    this.wowService.init();
    
    const theme = window.matchMedia('(prefers-color-scheme: light)');
    theme.addEventListener('change', () => {
      this.isDaytimeMode = window.matchMedia('(prefers-color-scheme: light)').matches;
    });
    this.isDaytimeMode = window.matchMedia('(prefers-color-scheme: light)').matches;
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

  downloadResume() {
    const storageRef = this.afStorage.refFromURL('gs://max-pok.appspot.com/max-pok-resume.pdf');
    storageRef.getDownloadURL().subscribe(url => {
      window.open(url);
    });
    
  }
}
