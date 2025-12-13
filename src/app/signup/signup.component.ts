import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    // Initialize the form group with controls and validation rules
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  // Helper method to easily access form controls in the template
  get formControls() {
    return this.signupForm.controls;
  }

  onSubmit(): void {
    this.isSubmitted = true;

    // Stop here if the form is invalid
    if (this.signupForm.invalid) {
      console.log('Form is invalid!');
      return;
    }

    // Form is valid, process data
    console.log('Form Submitted Successfully:', this.signupForm.value);
    
    // Here you would typically send data to a backend service (e.g., using HttpClient)
    // this.authService.register(this.signupForm.value).subscribe(...)
    
    alert('Signup successful!');
  }
}
