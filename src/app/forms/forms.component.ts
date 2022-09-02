import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  @ViewChild('f', { static: false }) signupForm!: NgForm;
  defaultSub = 'pro'
  user = {
    email: '',
    subscription: '',
    password: ''
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.user.email = this.signupForm.value.email;
    this.user.subscription = this.signupForm.value.subscription;
    this.user.password = this.signupForm.value.password;
    this.signupForm.reset();
  }
}
