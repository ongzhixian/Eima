import { Routes } from '@angular/router';
import {AuthenticatedLayoutComponent} from './layouts/authenticated-layout/authenticated-layout.component';
import {PublicLayoutComponent} from './layouts/public-layout/public-layout.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {LogoutPageComponent} from './pages/logout-page/logout-page.component';
import {ChangePasswordPageComponent} from './pages/change-password-page/change-password-page.component';
import {ProjectListPageComponent} from './pages/project/project-list-page/project-list-page.component';
import {
  ConfigurationListPageComponent
} from './pages/configuration/configuration-list-page/configuration-list-page.component';
import {
  ProjectRegistrationPageComponent
} from './pages/project/project-registration-page/project-registration-page.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthenticatedLayoutComponent,
    children: [
      { path: '', component: HomePageComponent, pathMatch: 'full'},
      { path: 'home', component: HomePageComponent },
      { path: 'change-password', component: ChangePasswordPageComponent },
      { path: 'logout', component: LogoutPageComponent },
    ]
  },

  {
    path: 'project',
    component: AuthenticatedLayoutComponent,
    children: [
      { path: 'list', component: ProjectListPageComponent },
      { path: 'registration', component: ProjectRegistrationPageComponent },
    ]
  },

  {
    path: '',
    component: AuthenticatedLayoutComponent,
    children: [
      { path: 'configuration-list', component: ConfigurationListPageComponent },
    ]
  },

  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: 'dashboard', component: HomePageComponent },
      { path: 'profile', component: HomePageComponent }
    ]
  },

  // no layout routes
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: HomePageComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
