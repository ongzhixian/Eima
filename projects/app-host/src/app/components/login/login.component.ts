import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ ReactiveFormsModule, NgIf ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', Validators.required],
    });
  }

  onSubmit() {

    if (this.loginForm.valid) {

      const { email, password } = this.loginForm.value;
      
      this.authService.login(email, password).subscribe({
        next: (appUser) => {
          console.log('Login success: {appUser}', appUser);
          this.router.navigate(['']); 
        },
        error: (err) => {
          // Handle specific errors from your backend 
          // (e.g., incorrect credentials, server errors)
          console.error('Login failed:', err); 
        }
      });

    }
  }
}