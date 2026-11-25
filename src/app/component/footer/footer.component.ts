import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer">
      <p>copyright &copy; 2021</p>
      <a href="/about">About</a>
    </div>
  `,
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
