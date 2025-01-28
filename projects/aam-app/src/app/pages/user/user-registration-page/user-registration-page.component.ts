import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../../../../app-host/src/app/services/authentication.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'aam-user-registration-page',
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './user-registration-page.component.html',
  styleUrl: './user-registration-page.component.css'
})
export class UserRegistrationPageComponent {

  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    private userService : UserService
  ) {

    this.registrationForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', Validators.required],
      displayName: ['', Validators.required],
    });
  }

  onSubmit() {

    if (this.registrationForm.valid) {

      //const {email, password} = this.registrationForm.value;

      this.userService.registerUser(
        this.registrationForm.value.username,
        this.registrationForm.value.password,
        this.registrationForm.value.email,
        this.registrationForm.value.displayName
      ).subscribe();

      // this.authService.login(email, password).subscribe({
      //   next: (appUser) => {
      //     console.log('Login success: {appUser}', appUser);
      //     this.router.navigate(['']);
      //   },
      //   error: (err) => {
      //     // Handle specific errors from your backend
      //     // (e.g., incorrect credentials, server errors)
      //     console.error('Login failed:', err);
      //   }
      // });
      console.log('TODO ok');

    } else {
      console.error('User registration failed.');
    }
  }
}
