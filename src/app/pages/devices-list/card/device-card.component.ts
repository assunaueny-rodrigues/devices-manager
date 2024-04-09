import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Device } from '../models/device.model';

@Component({
  standalone: true,
  selector: 'app-device-card',
  template: `
    <mat-card>
      <mat-card-content><b>Nome:</b> {{ device.name }}</mat-card-content>
      <mat-card-content><b>Descrição:</b> {{ device.description }}</mat-card-content>

      <mat-card-actions align="end">
        <button mat-button>EDITAR</button>
        <button mat-button>EXCLUIR</button>
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
}
