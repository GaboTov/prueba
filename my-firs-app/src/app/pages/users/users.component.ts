import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service'; 
import { UserType } from 'src/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

    constructor(
      private usersService: UsersService
    ){}
    users:UserType[] = []
    ngOnInit(): void {
      this.usersService.getAllUsers()
      .subscribe(data => {
        this.users = data 
      })
    }
    
}
