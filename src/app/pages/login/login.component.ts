import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formGroup: FormGroup = new FormGroup({ email: new FormControl(undefined), password: new FormControl(undefined) });

  constructor(private readonly router: Router){}

  login(): void {
    const email = this.formGroup.get('email')?.value;
    const password = this.formGroup.get('password')?.value;

    if(email === 'login@gmail.com' && password === '123456'){
      this.router.navigate(['/devices'])
    }

  }
}
