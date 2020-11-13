import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username:string
  password:string
  sInisSingedIn:boolean = false
  signInName = "Sign In"
  signedInName = "Logged In"
  constructor(private usrLogin: UserLoginService) { }

  ngOnInit(): void {
  }
  readLocalStorageValue(key) {
    return localStorage.getItem(key)
  }
  customerLogOut(){
    localStorage.removeItem('userSignedIn')
  }
  signedin() {
    console.log('signedin');
    
    if(localStorage.getItem('userSignedIn') === null){
      
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
         this.sInisSingedIn = true
         this.signInName = this.signedInName
        if(localStorage.getItem('userSignedUp') == 'SignedUpUser'){
          localStorage.removeItem('userSignedUp')
         }
         localStorage.setItem('userSignedIn', 'SignedUser')
         window.location.replace("http://localhost:4200/home")
         alert('user name and password found user is signed in')
            return this.usrLogin.isSingedIn = true
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
   
}


