import { Component, Input } from '@angular/core';
import { UserType, UserPostType, UserPutType } from 'src/user.model';
import { UsersService } from 'src/app/services/users.service'; 
@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.scss']
})
export class FormUsersComponent { 
  constructor(
    private usersService: UsersService
  ){}
  @Input() data:UserType = {
    id: '',
    name:'',
    _id:'',
    createDate: 0,
    updateDate: 0
  }
  @Input() disables: boolean = false


  createUser(){
    const dataPost:UserPostType = {name:this.data.name, id:this.data.id, createDate: Date.now(), updateDate: 0}
    this.usersService.createUser(dataPost)
      .subscribe(data => {
        console.log(data)
      })
    this.disables = !this.disables
  }
  updateUser(){
    this.disables = !this.disables
    const dataUpdate:UserPutType = {name:this.data.name, id:this.data.id , updateDate: Date.now()}
    this.usersService.updateUser(dataUpdate,this.data._id )
      .subscribe(data => {
        console.log(data)
      })
    
  }
  deleteUser(){
    console.log('elimina')
    this.usersService.deleteUser(this.data._id)
    .subscribe((data) => {
      console.log(data)
    })
  }
}
