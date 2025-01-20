import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideNavbarComponent} from './components/side-navbar/side-navbar.component';

@Component({
  selector: 'aam-root',
  imports: [RouterOutlet, SideNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aam-app';
}
