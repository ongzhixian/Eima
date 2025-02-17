import { Injectable } from '@angular/core';
import {NewProjectRegistration} from '../models/new-project-registration';
import {AppUser} from '../../../../app-host/src/app/models/app-user';
import {tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  registerProject(registration: NewProjectRegistration) {

    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    return this.http.post<NewProjectRegistration>(
      'https://hzgjqyzsm5qoqrcbaooxpofku40nndid.lambda-url.us-east-1.on.aws/?ver=1&config=asdqwe'
      , registration
      //, { headers, responseType: 'text'}
    ).pipe(
      tap(appUser => {
        console.log("Received {appUser}", appUser);
        // console.log("Received {appUser}", appUser);
        // this.isAuthenticated = true;
        // this.appUserSubject.next(appUser);
        // localStorage.setItem('appUser', JSON.stringify(appUser));
        // localStorage.setItem('isAuthenticated', this.isAuthenticated ? "true" : "false");
      })
    );
  }
}
