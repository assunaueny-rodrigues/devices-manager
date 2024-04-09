import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Device } from './models/device.model';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DeviceCardComponent } from './card/device-card.component';
import { ArrayUtil } from '../../shared/utils/array-util';

@Component({
  selector: 'app-devices-list',
  standalone: true,
  styles: [`
    .list-container {
      height: 76vh;
      overflow-y: auto;
    }

    .footer-container {
      width: 100%;
      text-align: right;
    }
  `],
  templateUrl: './devices-list.component.html',
  imports: [CommonModule, DeviceCardComponent, MatListModule, MatButtonModule, MatIconModule ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevicesListComponent {
  devices = [
    new Device('Device A', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...'),
    new Device('Device B', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...'),
    new Device('Device C', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...')
  ]

  readonly trackByFn = ArrayUtil.trackByFn
}
