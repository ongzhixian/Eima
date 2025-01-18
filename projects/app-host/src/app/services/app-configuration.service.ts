import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppConfiguration } from '../models/app-configuration';

@Injectable({
  providedIn: 'root'
})
export class AppConfigurationService {

  private settingsSubject = new BehaviorSubject<AppConfiguration>({
    theme: 'light', 
    language: 'en', 
    apiUrl: ''
    // Initialize other settings with default values
  });
  
  settings$ = this.settingsSubject.asObservable();

  updateSettings(updatedSettings: Partial<AppConfiguration>) {
    const newSettings = { ...this.settingsSubject.value, ...updatedSettings };
    this.settingsSubject.next(newSettings);
    localStorage.setItem('appSettings', JSON.stringify(newSettings)); 
  }

  constructor() { 
     // Load settings from local storage on initialization
     const storedSettings = localStorage.getItem('appSettings');
     if (storedSettings) {
       try {
         const parsedSettings: AppConfiguration = JSON.parse(storedSettings);
         this.settingsSubject.next(parsedSettings); 
       } catch (error) {
         console.error('Error loading settings from local storage:', error);
       }
     } else {
      // TODO: Get from elsewhere

     }
  }

}
