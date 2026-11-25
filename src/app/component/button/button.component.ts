import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      class="btn"
      [ngStyle]="{ 'background-color': color }"
      (click)="hit()"
    >
      {{ text }}
    </button>
  `,
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter();

  hit() {
    this.btnClick.emit();
  }
}
