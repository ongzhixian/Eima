import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        
        
        children: [
            // This will set the default '/' route goes to course/dashboard
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
                , loadChildren: () => import('../../../student-app/src/app/app.routes').then(c => c.routes)
                //, loadComponent: () => import('../../../student-app/src/app/app.component').then(c => c.AppComponent)  
            }
        ]
    }
    
];
