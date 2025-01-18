import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-logout-page',
  imports: [],
  templateUrl: './logout-page.component.html',
  styleUrl: './logout-page.component.css'
})
export class LogoutPageComponent {

  constructor(private router: Router, private authenticationService: AuthenticationService) {

    console.log("Logging out user.")

    authenticationService.logout();

    router.navigate(['/login'])
    
  }
  
}
