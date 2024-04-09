import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-layout',
  template: `
    <mat-toolbar color="primary">
      <span>Gerenciador de dispositivos</span>
    </mat-toolbar>

    <div class="container-main">
      <router-outlet />
    </div>
  `,
  styles: [`
    mat-toolbar {
      color: white;
    }

    .container-main {
      padding: 32px;
    }
  `],
  imports: [CommonModule, MatToolbarModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent  {

}
