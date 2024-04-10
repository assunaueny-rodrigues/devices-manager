import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EventEmitter } from '@angular/core';
import { Device } from '../models/device.model';

@Component({
  standalone: true,
  selector: 'app-device-card',
  template: `
    <mat-card>
      <mat-card-content><b>Nome:</b> {{ device.name }}</mat-card-content>
      <mat-card-content><b>Descrição:</b> {{ device.description }}</mat-card-content>

      <mat-card-actions align="end">
        <button mat-button (click)="updateEvent.emit(device)">EDITAR</button>
        <button mat-button (click)="deleteEvent.emit(device)">EXCLUIR</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [``],
  imports: [ CommonModule, MatCardModule, MatButtonModule ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceCardComponent {
  @Input({ required: true })
  device: Device;

  @Output()
  updateEvent: EventEmitter<Device> = new EventEmitter<Device>()

  @Output()
  deleteEvent: EventEmitter<Device> = new EventEmitter<Device>()
}
