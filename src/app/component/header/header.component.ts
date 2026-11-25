import { Component, Input } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <div class="header">
      <h1>{{ title }}</h1>
      <app-button
        *ngIf="hasRoute('/')"
        color="{{ showAddTask ? 'red' : 'green' }}"
        text="{{ showAddTask ? 'close' : 'Add' }}"
        (btnClick)="buttonPressed()"
      ></app-button>
    </div>
  `,
})
export class HeaderComponent implements OnDestroy {
  @Input() title!: string;
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  buttonPressed() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
