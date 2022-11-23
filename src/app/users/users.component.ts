import { Component, OnInit } from '@angular/core';
import { User } from '../models/users.model';
import { UsersService } from '../common/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:Array<User> = [];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.userData.subscribe((data)=>{
      this.users = data;
    });
  }

}
