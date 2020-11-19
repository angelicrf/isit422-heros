import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
let filterServiceGlobal: FilterService
let holdClientEmail = []
let getEmailValue = false
@Component({
  selector: 'app-cloudmanagement',
  templateUrl: './cloudmanagement.component.html',
  styleUrls: ['./cloudmanagement.component.css']
})
export class CloudmanagementComponent {
  
  constructor(public filterService: FilterService) {}
  
  title = 'CloudManagementComponent';
  checked = false;

  addFilterForm = false;

  dropboxForm = false;
  googleDriveForm = false;
  oneDriveForm = false;
  boxForm = false;
  gdEmail:string;
  
  dbAccount = {
    "username": "",
    "password": ""
  }
  gdAccount = {
    "username": "",
    "password": ""
  }
  odAccount = {
    "username": "",
    "password": ""
  }
  bAccount = {
    "username": "",
    "password": ""
  }

  fileTypes: String[] = [
    'Audio',
    'Documents',
    'Images',
    'Videos'
  ]
  fileType: String;

  services: String[] = [
    'Dropbox',
    'Google Drive',
    'OneDrive',
    'Box'
  ]
  service: String;

  filters: String[];

  ngOnInit(): void {
    this.getFilters();
  }

  getFilters(): void {
    this.filters = this.filterService.getFilters();
  }

  addFilter(filter: String): void {
    if(!this.filters.includes(filter) && !filter.includes("undefined"))
      this.filters.push(filter);
  }

  linkAccount(): void {
    // This should link the account if the passed in username and password are accurate
  }
  async googleDriveInit(){
    //this.googleDriveForm = true
    this.googleImplementCallBack()
    setTimeout(() => this.getClientEmail(),40000 )  
  }
  clientEmailValue(v: string) {
    console.log('set is called ')
    this.gdEmail = v;
    console.log('the value from set ' + v)
    console.log('the value from set2 ' + this.gdEmail)
  }
  googleImplementCallBack(){
   gapi.load('client:auth2', initClient) 
  }
  getClientEmail(){
   this.clientEmailValue(holdClientEmail[0])
  }
}
function initClient(){
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
    getClientdata()
    })
 }
 function getClientdata() {
    let showClient = gapi.auth2.getAuthInstance();
      return showClient.signIn({prompt: 'consent' })
        .then((googleUser: gapi.auth2.GoogleUser) => {
          let clientaccessToken = googleUser.getAuthResponse().access_token
          let clientEmail = googleUser.getBasicProfile().getEmail();
          let InstantiateClient = showClient.isSignedIn.get();
          getEmailValue = true
          holdClientEmail.push(clientEmail,clientaccessToken)
          return holdClientEmail
      })
}

