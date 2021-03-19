import { NgwWowService } from 'ngx-wow';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from './services/email.service';
import { DownloadService } from './services/download.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'max-pok';
  form!: FormGroup;
  isScrolled = false;
  isDaytimeMode = true;
  isScrolledHome = false;
  isScrolledAbout = false;
  isScrolledSkills = false;
  isScrolledPortfolio = false;
  isScrolledContactMe = false;
  isNavbarCollapsed = false;

  constructor(
    private wowService: NgwWowService,
    public emailService: EmailService,
    public downloadService: DownloadService
  ) {}

  ngOnInit(): void {
    this.wowService.init();

    this.initTheme();
    this.scrollEvent();

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }

  initTheme() {
    const theme = window.matchMedia('(prefers-color-scheme: light)');
    theme.addEventListener('change', () => {
      this.isDaytimeMode = window.matchMedia(
        '(prefers-color-scheme: light)'
      ).matches;
    });
    this.isDaytimeMode = window.matchMedia(
      '(prefers-color-scheme: light)'
    ).matches;
  }

  scroll(el: HTMLElement): void {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window:scroll', ['$event'])
  scrollEvent() {
    this.isScrolled = window.pageYOffset >= 80;
    this.isScrolledHome = window.pageYOffset <= 400;
    this.isScrolledAbout =
      window.pageYOffset > 400 && window.pageYOffset <= 1200;
    this.isScrolledSkills =
      window.pageYOffset > 1200 && window.pageYOffset <= 2600;
    this.isScrolledPortfolio =
      window.pageYOffset > 2600 && window.pageYOffset <= 3600;
    this.isScrolledContactMe = window.pageYOffset > 3600;
  }
}
