import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AppConfigurationService} from '../../../../app-host/src/app/services/app-configuration.service';
import {AppConfiguration} from '../../../../app-host/src/app/models/app-configuration';
import {ListAppUserResponse} from '../models/app-user-entry';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  settings$: Observable<AppConfiguration>;
  appConfiguration!: AppConfiguration; // Needed for getting urls for APIs

  constructor(private appConfigurationService: AppConfigurationService, private http: HttpClient) {

    this.settings$ = this.appConfigurationService.settings$;
    this.settings$.subscribe(appConfiguration => {
      this.appConfiguration = appConfiguration
    });
  }

  // getAppUserEntries(page: number): Observable<AppUserEntry[]> {
  //   let params = new HttpParams();
  //   params = params.append('page', page.toString());
  //
  //   return this.http.get<AppUserEntry[]>(this.apiUrl, { params });
  // }

  getUserList(page: number): Observable<ListAppUserResponse> {

    const apiUrl = this.appConfiguration.apiUrls['appUser'];

    let params = new HttpParams();
    params = params.append('page', page.toString());

    return this.http.get<ListAppUserResponse>(apiUrl, { params }).pipe(
      tap((response: ListAppUserResponse) => {
        console.log(response);
      })
    );
    //
    // return this.http.get<AppUserEntry[]>(apiUrl).pipe(
    //   tap(appUser => {
    //     console.log("Received {appUser}", appUser);
    //     // this.isAuthenticated = true;
    //     // this.appUserSubject.next(appUser);
    //     // localStorage.setItem('appUser', JSON.stringify(appUser));
    //     // localStorage.setItem('isAuthenticated', this.isAuthenticated ? "true" : "false");
    //   })
    // );
  }

  registerUser(username : string, password : string, email : string, displayName : string) {

    const apiUrl = this.appConfiguration.apiUrls['appUser'];

    return this.http.post(apiUrl, { username, password, email, displayName });

  }

}
