import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { authenticatedUserGuard } from './guards/authenticated-user.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';

export const routes: Routes = [
    {
        path: '',
        canActivate: [authenticatedUserGuard],
        children: [
            // This will set the default '/' route goes to course/dashboard
            {
                path: '',
                pathMatch: 'full',
                component: HomePageComponent
            },
            {
                path: 'logout',
                pathMatch: 'full',
                component: LogoutPageComponent
            },
            {
                path: 'course-dashboard',
                pathMatch: 'full',
                redirectTo: 'course/dashboard'
            },
            {
                path: 'course'
                , loadChildren: () => import('../../../course-app/src/app/app.routes').then(c => c.routes)
            },
            {
                path: 'student'
                , loadChildren: () => import('../../../student-app/src/app/app.routes').then(c => c.routes)
                //, loadComponent: () => import('../../../student-app/src/app/app.component').then(c => c.AppComponent)
            },
            {
                path: 'aam'
                , loadChildren: () => import('../../../aam-app/src/app/app.routes').then(c => c.routes)
                , loadComponent: () => import('../../../aam-app/src/app/app.component').then(c => c.AppComponent)
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'login',
                pathMatch: 'full',
                component: LoginPageComponent
            },
        ]
    }

];
