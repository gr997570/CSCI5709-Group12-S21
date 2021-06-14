import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AbstractControl, FormBuilder, Validators, FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthServiceService } from '../services/tutorial4/auth-service.service';
import { LoginResponse } from './loginresponse';

@Component({
  selector: 'app-tutorial4',
  templateUrl: './tutorial4.component.html',
  styleUrls: ['./tutorial4.component.css']
})
export class Tutorial4Component implements OnInit {

  loginForm: any;
  loginResponse: LoginResponse;
  errorMessage: string;

  constructor(private fb: FormBuilder, private authService: AuthServiceService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ["", [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((response: LoginResponse) => {
      this.loginResponse = response;
      if(this.loginResponse?.status){
        this.router.navigate(["/users"]);
      }
    }, (error: any) => {
      this.errorMessage = error;
      this.loginForm.setErrors({credentialMismatch: true});
    });
  }
}
