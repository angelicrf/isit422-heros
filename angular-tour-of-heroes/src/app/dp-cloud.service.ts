import { Injectable } from '@angular/core';
import { Dropbox } from 'dropbox';
import unfetch from 'unfetch';

@Injectable({
  providedIn: 'root'
})
export class DpCloudService {

  constructor() { }

  accesToken: string;

  getCodefromUri(): string {
    const uriLink = location.href;
    const newUri = new URL(uriLink);
    const findParam = newUri.searchParams.get('code');
    //console.log(findParam)
    return findParam;
  }
  sendMessageToNode(sendCodeData: string) {
    return new Promise((resolve, reject) => {
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let raw = JSON.stringify({
        title: 'codefromAngular',
        saveCode: sendCodeData,
      });

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      };

      fetch('/api/showData', requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          //console.log('the acces_token is ', result[Object.keys(result)[0]]);
          this.accesToken = result[Object.keys(result)[0]];
          
          resolve(this.accesToken);
        })
        .catch((error) => console.log('error', error));
    });
  }
  dpGetClientInfo(dpAccessToken:string){
    //encoder.htmlEncode(response.name.display_name)
     let dbx = new Dropbox({
      accessToken: dpAccessToken
    });
    console.log(JSON.stringify(dbx));
    dbx
      .usersGetCurrentAccount()
      .then(response => {
         console.log(JSON.stringify("First then" + response.result.email))
         localStorage.setItem('dpEmail',response.result.email)
         return response
        })
      .catch((err) => console.log(err))  
  }
}
