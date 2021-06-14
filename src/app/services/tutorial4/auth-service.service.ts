import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoginResponse } from '../../tutorial4/loginresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  apiEndpoint = 'https://tutorial4-api.herokuapp.com/api/users/';
  loginResponse: LoginResponse;
  errorMessage: string;

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    let postData = {email: email, password: password};
    return this.http.post<LoginResponse>(this.apiEndpoint+'login', postData).pipe(
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    }
   else {
      this.errorMessage = error.error.message;
    }
    return throwError(this.errorMessage);
  }
}
