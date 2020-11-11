import { Component } from '@angular/core';
import { UserLoginService } from './user-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private usrLogin: UserLoginService){}
  title = 'MultiCloud'
  name:string
  lastname:string
  username:string
  email:string
  password:string

  signedin(){
    console.log("signedin");
}
  signedup(){
    let newName = this.name
    let newlastName = this.lastname
    let newUserName = this.username
    let newEmail = this.email
    let newPassword = this.password

    let newSignedup = []
    newSignedup.push(newName,newlastName,newUserName,newEmail,newPassword)
    console.log('signedup array is '  + newSignedup);
    this.usrLogin.userSiginUp(newName,newlastName,newUserName,newPassword)
    return newSignedup
  }
  menu_info(){
    console.log("menu info clicked");
  }
}
