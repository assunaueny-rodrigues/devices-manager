import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Device } from './models/device.model';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DeviceCardComponent } from './card/device-card.component';
import { ArrayUtil } from '../../shared/utils/array-util';
import { DeviceController } from '../../controllers/devices/device.controller';
import { Observable, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { DeviceFormModalComponent } from './form-modal/form-modal.component';

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
export class DevicesListComponent implements OnInit {
  devices$ = new Observable<Device[]>();

  readonly trackByFn = ArrayUtil.trackByFn

  constructor(
    private readonly dialog: MatDialog,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly deviceController: DeviceController
  ){}

  ngOnInit(): void {
    this.listDevices();
  }

  listDevices(): void {
    this.devices$ = this.deviceController.listDevices()
    this.changeDetectorRef.detectChanges()
  }

  openDeviceRegister(): void {
    const dialogRef = this.dialog.open(DeviceFormModalComponent, {
      data: undefined,
    });

    dialogRef.afterClosed().subscribe(device => {
      const deviceWithId = { ...device, id: Math.random() }
      this.deviceController.addDevice(deviceWithId)
      this.listDevices()
    });
  }

  openDeviceUpdate(device: Device): void {
    const dialogRef = this.dialog.open(DeviceFormModalComponent, {
      data: device,
    });

    dialogRef.afterClosed().subscribe(device => {
      this.deviceController.updateDevice(device)
      this.listDevices()
      this.changeDetectorRef.detectChanges()
    });
  }

  deviceDelete(device: Device): void {
    this.deviceController.deleteDevice(device)
    this.listDevices()
    this.changeDetectorRef.detectChanges()
  }
}
