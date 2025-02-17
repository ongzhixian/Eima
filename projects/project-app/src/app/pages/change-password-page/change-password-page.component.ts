import { Component } from '@angular/core';
import {PocService} from '../../services/poc.service';

@Component({
  selector: 'project-app-change-password-page',
  imports: [],
  templateUrl: './change-password-page.component.html',
  styleUrl: './change-password-page.component.css'
})
export class ChangePasswordPageComponent {

  constructor(private pocService : PocService) {
  }

  RunTest() {
    console.log('RunTest');
    this.pocService.callHelloLambdaFunction().subscribe(responseMessage => {
      console.log("API returned: " + responseMessage);
    });
  }
}
