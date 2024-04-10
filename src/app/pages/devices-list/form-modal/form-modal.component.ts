import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Device } from '../models/device.model';

@Component({
  standalone: true,
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styles: [`
    mat-form-field {
      width: 100%;
    }
  `],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule
  ],

})
export class DeviceFormModalComponent  {
  readonly titulo: string;

  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DeviceFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Device,
    private readonly fb: FormBuilder
  ) {

    this.titulo = this.data ? 'Editando dispositivo' : 'Adicionando dispositivo';

    this.formGroup = this.fb.group({
      id: this.fb.control(this.data?.id, [ Validators.required ]),
      name: this.fb.control(this.data?.name, [ Validators.required ]),
      description: this.fb.control(this.data?.description, [ Validators.required ]),
    })
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
