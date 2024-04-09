import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DevicesListComponent } from './pages/devices-list/devices-list.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'devices', component: DevicesListComponent },
];
