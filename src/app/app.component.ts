import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [`
    body {
      margin: 0;
    }
  `]
})


export class AppComponent {
  title = 'devices-manager';
}
