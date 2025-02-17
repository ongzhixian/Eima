import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';
import {ProjectService} from '../../../services/project.service';

@Component({
  selector: 'project-app-project-registration-page',
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './project-registration-page.component.html',
  styleUrl: './project-registration-page.component.css'
})
export class ProjectRegistrationPageComponent {

  projectReqistrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private projectService: ProjectService,
  ) {
    this.projectReqistrationForm = this.fb.group({
      projectName: ['', [Validators.required]],
      projectVersion: [''],
      // projectNextVersion: [''],
    });
  }

  onSubmit() {

    this.projectService.registerProject(this.projectReqistrationForm.value).subscribe(response => {

    });
  }
}
