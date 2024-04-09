import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DevicesListComponent } from './pages/devices-list/devices-list.component';
import { LayoutComponent } from './lib/layout/layout.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', component: LayoutComponent,
    children: [
      {
        path: 'devices',
        component: DevicesListComponent
      }
    ]
  },
];
