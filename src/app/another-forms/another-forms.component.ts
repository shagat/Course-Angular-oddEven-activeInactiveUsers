import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-another-forms',
  templateUrl: './another-forms.component.html',
  styleUrls: ['./another-forms.component.css']
})
export class AnotherFormsComponent implements OnInit {
  projectForm: FormGroup;
  forbiddenProjectNames = ['test'];

  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'project': new FormControl(null, [Validators.required], [this.forbiddenNames]),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'status': new FormControl('stable')
    });
  }

  // forbiddenNames(control: FormControl): {[s: string]:boolean} {
  //   if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
  //     return {'nameIsForbidden': true};
  //   }
  //   return null;
  // }

  forbiddenNames(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test'){
          resolve({'nameIsForbidden': true});
        } else{
          resolve(null);
        }
      }, 1500)
    });
    return promise;
  }

  onSubmit() {
    console.log(this.projectForm.value)
    this.projectForm.reset();
  }

}
