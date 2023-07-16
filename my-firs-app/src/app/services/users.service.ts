import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserPostType, UserPutType, UserType} from '../../user.model'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http:HttpClient
  ) { }
  getAllUsers(){
    return this.http.get<UserType[]>('http://localhost:3000/api/users')
  }
  createUser(dto:UserPostType){
    return this.http.post<UserType>("http://localhost:3000/api/users", dto)
  }
  updateUser(user:UserPutType, _id:string){
    return this.http.put<UserType>(`http://localhost:3000/api/users/${_id}`,user)
  }

  deleteUser(_id:string){
    return this.http.delete(`http://localhost:3000/api/users/${_id}`)
  }
}
