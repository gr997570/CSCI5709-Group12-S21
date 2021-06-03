import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators, FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tutorial3',
  templateUrl: './tutorial3.component.html',
  styleUrls: ['./tutorial3.component.css']
})
export class Tutorial3Component implements OnInit {

  loginForm: any;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      fname: ["", [Validators.required, Validators.pattern('^[A-Za-z0-9 ]+$')]],
      lname: ["", [Validators.required, Validators.pattern('^[A-Za-z0-9 ]+$')]],
      email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.pattern('^[A-Za-z0-9!@$&#%*^]+$')]],
      cpassword: ["", [Validators.required]]
    }, {validator: matchPassword("password", "cpassword")});
  }

  ngOnInit() {}

  onSubmit() {
    let formFields: NavigationExtras = {
      queryParams: {
        "fname": this.loginForm.value.fname,
        "lname": this.loginForm.value.lname,
        "email": this.loginForm.value.email
      }
    }
    this.router.navigate(["/profile"], formFields);
  }
}

function matchPassword(password: string, cpassword: string) {
  return (formGroup: FormGroup) => {
    if (formGroup.controls[cpassword]?.errors && !formGroup.controls[cpassword].errors?.nomatch) {
      return;
    }
    if(formGroup.controls[password].value !== formGroup.controls[cpassword].value){
      formGroup.controls[cpassword].setErrors({nomatch: true});
    }
    else
      formGroup.controls[cpassword].setErrors(null);
  };
}

/*function matchPassword(password: string, cpassword: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[password];
        const matchingControl = formGroup.controls[cpassword];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ nomatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}*/
