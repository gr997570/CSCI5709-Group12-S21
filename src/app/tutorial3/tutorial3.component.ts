import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RxwebValidators } from "@rxweb/reactive-form-validators";
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
      password: ["", [Validators.required, Validators.minLength(8), Validators.pattern('^[A-Za-z0-9!@$&]+$')]],//'^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      cpassword: ["", [Validators.required, RxwebValidators.compare({fieldName: 'password'})]]
    });
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
