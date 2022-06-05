import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  @ViewChild('f', { static: false }) signupForm!: NgForm;
  defaultSub = 'advance'
  user = {
    email: '',
    subscription: '',
    password: ''
  };
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.user.email = this.signupForm.value.user;
    this.user.subscription = this.signupForm.value.subscription;
    this.user.password = this.signupForm.value.password;
    console.log(this.signupForm.value)
    this.signupForm.reset();
  }
}
