import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { AppUser } from '../models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    isAuthenticated: boolean = false;
    
    isUserLoggedIn: boolean = false;

    apiUrl: string = 'https://localhost:7071';

    login(userName: string, password: string): Observable<AppUser> {

        //this.http.post<User>(this.apiUrl + '/api/User/register', newUser)

        console.log(userName);
        console.log(password);
        this.isUserLoggedIn = userName == 'admin' && password == 'admin';
        localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");

        // return this.http.post<Auth>(`${this.apiURLUsers}/login`, { email, password })
        //     .pipe(
        //         tap(user => {
        //         if (user.token) {
        //             this.setUserSession(user);
        //         }
        //         })
        //     );

        return of(<AppUser>{ username: "asd" }).pipe(
            delay(1000),
            tap(val => {
                console.log("Is User Authentication is successful: " + val);
            })
        );
    }

    logout(): void {
        this.isUserLoggedIn = false;
        localStorage.removeItem('isUserLoggedIn');
    }

    constructor() { }

}
