import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isAuthenticated$: Observable<boolean>;

  constructor(private authenticationService: AuthenticationService) {
    
    this.isAuthenticated$ = this.authenticationService.appUser$.pipe(
      map(obj => obj.isAuthenticated) 
    );

  }
}
