import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor() { }
  userSiginUp(userName:string,userlastName:string,userUserName:string,userPassword:string){
   
    let userValue = JSON.stringify({
      name: userName,
      lastname: userlastName,
      username: userUserName, 
      password: userPassword
    })

    let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
    return fetch('/api/MCUser',{
      method: 'POST',
      headers: myHeaders,
      body: userValue
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }
}
