import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'project-app-authenticated-layout',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './authenticated-layout.component.html',
  styleUrl: './authenticated-layout.component.css'
})
export class AuthenticatedLayoutComponent {

}
