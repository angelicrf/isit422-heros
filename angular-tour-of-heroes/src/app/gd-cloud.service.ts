import { Injectable } from '@angular/core';
import { GDClientCredentials} from './gdClientCredentials';
let holdClientEmail = []
let holdClientFiles = []
let getEmailValue = false

@Injectable({
  providedIn: 'root'
})
export class GdCloudService {

  constructor(private gdkh: GDClientCredentials) {
    this.gdkh.holdDataClient = holdClientEmail;
    this.gdkh.holdFilesClient = holdClientFiles;
    console.log("gdkh.holdDataClient " + this.gdkh.holdDataClient)
   }
 
  async googleImplementCallBack(){
    
    return await new Promise((resolve,reject) => {
     gapi.load('client:auth2', () => {
      gapi.client
      .init({
        apiKey: 'AIzaSyCoO79P9OtAYVmr6PUSNqRF69PmAMwyuiA',
        discoveryDocs: [
          'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
        ],
        clientId:
          '160810936655-90na0qia4bkvqrsljk6acttn60tru758.apps.googleusercontent.com',
        scope:
          'profile email https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata',
      })
      .then(function() {
        console.log("client initialized...")
        let showClient = gapi.auth2.getAuthInstance();
        showClient.signIn({prompt: 'consent' })
        .then((googleUser: gapi.auth2.GoogleUser) => {
          let clientaccessToken = googleUser.getAuthResponse().access_token
          let clientEmail = googleUser.getBasicProfile().getEmail();
          let clientName = googleUser.getBasicProfile().getName();
          let InstantiateClient = showClient.isSignedIn.get();
          getEmailValue = true
          let mongoDbUserId = localStorage.getItem('userMnId')
          sendGdClientInfo(clientName,clientEmail,mongoDbUserId)
          holdClientEmail.push(clientEmail,clientaccessToken)
          
          return resolve(holdClientEmail)
         })
       })
     })
   }) 
  }
  async listGoogleDriveFiles() {
    console.log('listGoogleDriveFiles called')
     return await new Promise((resolve,reject) => {
      return gapi.client.drive.files
      .list({
        fields:
          'nextPageToken, files(id, name, mimeType, modifiedTime, size, webContentLink)',
        q: "'root' in parents and trashed = false",
      })
      .then((res) => { 
        let allClientFiles:string[] = []
              res.result.files.forEach(fl => {
                allClientFiles.push(fl.name);      
              })
              console.log('files from gd-cloud Services ' + allClientFiles)
            return resolve(allClientFiles);
          })
        .catch((err) => console.log('err from listGoogleDriveFiles ' + err))
     }) 
  }
  
}
function sendGdClientInfo(getGdName,getgdEmail,getUserMongoId){
  let gdClientValue = JSON.stringify({
    gdname: getGdName,
    gdemail: getgdEmail,
    usermongoid: getUserMongoId, 
  })
  let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
  return fetch('/api/MCGdClient',{
    method: 'POST',
    headers: myHeaders,
    body: gdClientValue
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
}
