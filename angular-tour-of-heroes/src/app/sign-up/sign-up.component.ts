import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  name:string
  lastname:string
  username:string
  email:string
  password:string
  isError:boolean = true

  constructor(private usrLogin: UserLoginService) { }

  ngOnInit(): void {
  }
  signedup() {
    let newName = this.name
    let newlastName = this.lastname
    let newUserName = this.username
    let newEmail = this.email
    let newPassword = this.password
    
    let newSignedup = []
    newSignedup.push(newName,newlastName,newUserName,newEmail,newPassword)
    console.log('signedup array is '  + newEmail + ' ' + newPassword)
    this.usrLogin.userSiginUp(newName,newlastName,newUserName,newEmail,newPassword)
   
    return newSignedup

  }
}
