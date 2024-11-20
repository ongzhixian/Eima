import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        
        // component: AppComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'course/dashboard'
            },
            {    
                path: 'course'
                , loadChildren: () => import('../../../course-app/src/app/app.routes').then(c => c.routes)  
            },
            {    
                path: 'student'
                , loadComponent: () => import('../../../student-app/src/app/app.component').then(c => c.AppComponent)  
            }
        ]
    }
    
];
