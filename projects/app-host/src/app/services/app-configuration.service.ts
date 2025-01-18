import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppConfiguration } from '../models/app-configuration';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigurationService {

  private settingsSubject = new BehaviorSubject<AppConfiguration>({
    theme: 'light',
    language: 'en',
    apiUrls: {}
    // Initialize other settings with default values
  });

  settings$ = this.settingsSubject.asObservable();

  appConfiguration!: AppConfiguration;

  updateSettings(updatedSettings: Partial<AppConfiguration>) {
    const newSettings = { ...this.settingsSubject.value, ...updatedSettings };
    this.settingsSubject.next(newSettings);
    localStorage.setItem('appConfiguration', JSON.stringify(newSettings));
  }

  constructor(private http: HttpClient) {

    // Load defaults from file: app-config.json
    this.http.get<AppConfiguration>('./assets/app-config.json').subscribe(config => {

      this.appConfiguration = config;

      // Load settings from local storage on initialization
      const storedSettings = localStorage.getItem('appConfiguration');
      if (storedSettings) {
        try {
          const parsedAppConfiguration: AppConfiguration = JSON.parse(storedSettings);
          this.appConfiguration = { ...this.appConfiguration, ...parsedAppConfiguration };
        } catch (error) {
          console.error('Error loading settings from local storage:', error);
        }
      }

      this.settingsSubject.next(this.appConfiguration);

    });

  }

}
