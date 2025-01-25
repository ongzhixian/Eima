import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

//import {LoginPageComponent} from '../../../app-host/src/app/pages/login-page/login-page.component';
import {UserListPageComponent} from './pages/user/user-list-page/user-list-page.component';
import {UserRegistrationPageComponent} from './pages/user/user-registration-page/user-registration-page.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { AppComponent } from './app.component';

export const routes: Routes = [
    { path:'', component: DashboardComponent },
    { path:'dashboard', component: DashboardComponent },

    //{ path:'register-user', component: RegisterUserComponent },
    // { path:'', component: AppComponent },
    // { path:'dashboard', component: DashboardComponent },
    // { path:'lazy-dashboard' , loadComponent: () => import('../app/pages/dashboard/dashboard.component').then(c => c.DashboardComponent) }
    {
      path: 'user',
      children: [
        { path:'list', component: UserListPageComponent },
        { path:'register', component: UserRegistrationPageComponent },
      ]
    }
];
