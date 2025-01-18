import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { AppUser } from '../models/app-user';
import { AppConfigurationService } from './app-configuration.service';
import { AppConfiguration } from '../models/app-configuration';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    isAuthenticated: boolean = false;

    //apiUrl: string = 'https://localhost:7071';

    settings$: Observable<AppConfiguration>;

    appConfiguration!: AppConfiguration; // Needed for getting urls for APIs

    private appUserSubject = new BehaviorSubject<AppUser>({
        isAuthenticated: false,
        username: '',
        token: ''
    });

    appUser$ = this.appUserSubject.asObservable();

    constructor(private appConfigurationService: AppConfigurationService, private http: HttpClient) {

        this.settings$ = this.appConfigurationService.settings$;

        this.settings$.subscribe(appConfiguration => {
            this.appConfiguration = appConfiguration
        });
    }


    login(username: string, password: string): Observable<AppUser> {

        console.debug(username, password);
        console.debug(
            this.appConfiguration.apiUrls['authenticate'],
            this.appConfiguration.apiUrls['userPreference']
        );

        const authenticateUrl = this.appConfiguration.apiUrls['authenticate']

        return this.http.post<AppUser>(authenticateUrl, { username, password }).pipe(
            tap(appUser => {
                console.log("Received {appUser}", appUser);
                this.isAuthenticated = true;
                this.appUserSubject.next(appUser);
                localStorage.setItem('isAuthenticated', this.isAuthenticated ? "true" : "false");
            })
        );


        // this.isAuthenticated = userName == 'admin@eima' && password == 'admin';

        // const newAppUser: AppUser = {
        //     isAuthenticated : true,
        //     token : 'someTple',
        //     username : 'someuser'
        // };

        // this.appUserSubject.next(newAppUser);

        // localStorage.setItem('isAuthenticated', this.isAuthenticated ? "true" : "false");

        // return this.http.post<Auth>(`${this.apiURLUsers}/login`, { email, password })
        //     .pipe(
        //         tap(user => {
        //         if (user.token) {
        //             this.setUserSession(user);
        //         }
        //         })
        //     );

        // return of(<AppUser>{ username: userName }).pipe(
        //     delay(1000),
        //     tap(val => {
        //         console.log("Is User Authentication is successful: " + val);
        //     })
        // );
    }

    logout(): void {
        this.isAuthenticated = false;
        this.appUserSubject.next({
            isAuthenticated: false,
            token: '',
            username: ''
        });
        localStorage.removeItem('isAuthenticated');
    }

}
