import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { AppComponent } from './app.component';

export const routes: Routes = [
    { path:'', component: DashboardComponent },
    { path:'dashboard', component: DashboardComponent }
    // { path:'', component: AppComponent }, 
    // { path:'dashboard', component: DashboardComponent },
    // { path:'lazy-dashboard' , loadComponent: () => import('../app/pages/dashboard/dashboard.component').then(c => c.DashboardComponent) }
];
