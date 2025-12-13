import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.signupForm.controls;
  }
  get name() {
  return this.signupForm.get('name');
}

get email() {
  return this.signupForm.get('email');
}

get password() {
  return this.signupForm.get('password');
}


  onSubmit() {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }
console.log(this.signupForm.value)
    this.authService.signup(this.signupForm.value)
      .subscribe({
        next: res => {
          alert('Signup successful');
          this.signupForm.reset();
          this.submitted = false;
        },
        error: err => {
          alert('Signup failed');
        }
      });
  }
}
