import { Injectable } from '@angular/core';
import { Device } from '../../pages/devices-list/models/device.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceController {
  // Esse serviço vai utilizar o localStorage para persistir os dados e simular uma api

  readonly DEVICES_KEY = 'DEVICES_KEY'

  addDevice(device: Device): Observable<Device> {
    const currentDevicesList = this.getDevices();

    currentDevicesList.push(device);
    this.setDevices(currentDevicesList)

    return of(device);
  }


  private getDevices(): Device[] {
    return localStorage.getItem(this.DEVICES_KEY) ? JSON.parse(localStorage.getItem(this.DEVICES_KEY) as string) : []
  }

  private setDevices(devices: Device[]): void {
    return localStorage.setItem(this.DEVICES_KEY, JSON.stringify(devices))
  }

  updateDevice(device: Device): Observable<Device> {
    const currentDevicesList = this.getDevices();

    const index = currentDevicesList.indexOf(device);
    currentDevicesList[index] = device;

    this.setDevices(currentDevicesList);

    return of(device);
  }

  deleteDevice(device: Device): Observable<Device> {
    const currentDevicesList = this.getDevices();

    const index = currentDevicesList.indexOf(device);
    currentDevicesList.splice(index, 1);

    this.setDevices(currentDevicesList);

    return of(device)
  }

  listDevices(): Observable<Device[]> {
    const currentDevicesList = this.getDevices();

    return of(currentDevicesList)
  }
}
