import { Injectable, OnInit } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { AppUser } from '../models/app-user';
import { AppConfigurationService } from './app-configuration.service';
import { AppConfiguration } from '../models/app-configuration';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    login(userName: string, password: string): Observable<AppUser> {

        //this.http.post<User>(this.apiUrl + '/api/User/register', newUser)

        console.log(userName, password);

        console.log(password);

        this.isAuthenticated = userName == 'admin@eima' && password == 'admin';

        const newAppUser: AppUser = {
            isAuthenticated : true,
            token : 'someTple',
            username : 'someuser'
        };

        this.appUserSubject.next(newAppUser);
        localStorage.setItem('isAuthenticated', this.isAuthenticated ? "true" : "false");

        // return this.http.post<Auth>(`${this.apiURLUsers}/login`, { email, password })
        //     .pipe(
        //         tap(user => {
        //         if (user.token) {
        //             this.setUserSession(user);
        //         }
        //         })
        //     );

        return of(<AppUser>{ username: userName }).pipe(
            delay(1000),
            tap(val => {
                console.log("Is User Authentication is successful: " + val);
            })
        );
    }

    logout(): void {
        this.isAuthenticated = false;
        localStorage.removeItem('isAuthenticated');
    }

    isAuthenticated: boolean = false;
    
    apiUrl: string = 'https://localhost:7071';
    
    settings$: Observable<AppConfiguration>;

    private appUserSubject = new BehaviorSubject<AppUser>({
        isAuthenticated: false,
        username: '',
        token: ''
    });
    
    appUser$ = this.appUserSubject.asObservable();
    
    constructor(private appConfigurationService: AppConfigurationService) {
        this.settings$ = this.appConfigurationService.settings$;
    }

}
