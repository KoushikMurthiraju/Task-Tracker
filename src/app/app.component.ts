import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-header title="Task Tracker"></app-header>
      <router-outlet></router-outlet>
      <app-footer *ngIf="isFooterVisible"></app-footer>
    </div>
  `,
})
export class AppComponent {
  title = 'LatestAngular';
  isFooterVisible = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isFooterVisible = event.url.includes('about') ? false : true;
      }
    });
  }
}
