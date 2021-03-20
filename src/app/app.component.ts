import { NgwWowService } from 'ngx-wow';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from './services/email.service';
import { DownloadService } from './services/download.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  isNavbarCollapsed = true;

  currentSection = 'section1';

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
    this.currentSection = el.className;
  }

  @HostListener('window:scroll', ['$event'])
  scrollEvent() {
    this.isScrolled = window.pageYOffset >= 70;
  }
}
