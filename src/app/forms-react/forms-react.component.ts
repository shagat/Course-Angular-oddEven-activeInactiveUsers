import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-react',
  templateUrl: './forms-react.component.html',
  styleUrls: ['./forms-react.component.css']
})
export class FormsReactComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit(): void {
  this.signupForm = new FormGroup({
    'userData': new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null,[Validators.required, Validators.email])
    }),
    'gender': new FormControl('male'),
    'hobbies': new FormArray([])
  });
}

onAddHobby(){
  const control = new FormControl(null, Validators.required);
  (<FormArray>this.signupForm.get('hobbies'))
}

get controls() {
  return (this.signupForm.get('hobbies') as FormArray).controls;
}

}
