import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { GdCloudService } from '../gd-cloud.service';
import { GDClientCredentials } from '../gdClientCredentials';

@Component({
  selector: 'app-cloudmanagement',
  templateUrl: './cloudmanagement.component.html',
  styleUrls: ['./cloudmanagement.component.css']
})
export class CloudmanagementComponent {
  
  constructor(public filterService: FilterService, private gdService: GdCloudService, private gdcl:GDClientCredentials) {}
  
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
  clientEmailValue(v: string) {
    this.gdEmail = v;
    console.log('the value from set2 ' + this.gdEmail)
  }
  async getClientEmail(){
    return await this.clientEmailValue(this.gdcl.holdDataClient[0])
   }
  async googleDriveInit(){
    //this.googleDriveForm = true
    let holdPromise = await this.gdService.googleImplementCallBack()
    console.log("HoldPromises " + holdPromise)
    let holdUserData = await this.getClientEmail()
    console.log("holdUserData " + holdUserData)
    this.getFiles() 
    }
  getFiles() {
      gapi.client
        .request({
          method: 'GET',
          path:
            'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
        })
        .then(() => {
            this.gdService.listGoogleDriveFiles()
            let clFile = this.gdcl.holdFilesClient
            console.log("All files " + clFile)
        })
      }
 
}


