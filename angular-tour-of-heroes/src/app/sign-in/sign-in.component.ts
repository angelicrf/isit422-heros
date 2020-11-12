import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username:string
  password:string

  constructor(private usrLogin: UserLoginService) { }

  ngOnInit(): void {
  }
  signedin() {
   /*  console.log('signedin');
       if(localStorage.length != 0){
      this.username = localStorage.getItem('clientEmail')
      this.password = localStorage.getItem('clientPassword')
    }  
     else{ */
      this.usrLogin.userSignIn()
      .then(res => {
        console.log("All from app comp " + JSON.stringify(res))
        let userNameFound = false
        let passwordFound  = false
        let keys = Object.keys(res)
        let userNamevalue = []
        let passwordvalue = []
         for (var i = 0; i < keys.length; i++) {
          userNamevalue.push(res[i].clientUserName)
          passwordvalue.push(res[i].clientPassword)
       } 
       if(userNamevalue.includes(this.username) && passwordvalue.includes(this.password)){ 
        userNameFound = true
        passwordFound = true
           }
       if(userNamevalue.includes(this.username) && !passwordvalue.includes(this.password)) {
        userNameFound = true
            passwordFound = false
           } 
       if(!userNamevalue.includes(this.username) && !passwordvalue.includes(this.password)){
        userNameFound = false
            passwordFound = false
           }
       if(!userNamevalue.includes(this.username) && passwordvalue.includes(this.password)) {
        userNameFound = false
            passwordFound = true
           }
       if(userNameFound && passwordFound){
         
            alert('user name and password found user is signed in')
         }       
       if(userNameFound && passwordFound == false) {
          alert('password doesnot match up, try again')
         } 
       if(userNameFound == false && passwordFound == false) {
          alert('account doesnot exist try again or sign up')
         }
       if(userNameFound == false && passwordFound) {
          alert('user name doesnot match up, try again')
         }
      }) 
      .catch(err => console.log('error from getting dataMongo ' + err))
    } 
  }
   
//}


