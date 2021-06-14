import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { UserProfile } from '../../tutorial4/users/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  apiEndpoint = 'https://tutorial4-api.herokuapp.com/api/users/';
  userProfile: UserProfile;

  constructor(private http: HttpClient) { }

  public loadProfiles(): Observable<UserProfile[]>{
    return this.http.get<UserProfile[]>(this.apiEndpoint);
  }

  public getUser(userid: string): Observable<UserProfile>{
    return this.http.get<UserProfile>(this.apiEndpoint+userid);
  }
}
