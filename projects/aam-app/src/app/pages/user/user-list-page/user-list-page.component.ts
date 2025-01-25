import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';
import {AppUserEntry, ListAppUserResponse} from '../../../models/app-user-entry';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'aam-user-list-page',
  imports: [
    NgForOf
  ],
  templateUrl: './user-list-page.component.html',
  styleUrl: './user-list-page.component.css'
})
export class UserListPageComponent implements OnInit {

  users!:AppUserEntry[];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getUserList(1).subscribe(users => {
      this.users = users.listEntries;
    });
  }
}
