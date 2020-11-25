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
  localForm = false;
  gdEmail:string = this.readLocalStorageValue('gdUserEmail')
  
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
    'Box',
    'Local File System'
  ]
  service: String;

  filters: String[];

  localFilePath: string;

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

  setLocalStorageFilePath() {
    localStorage.setItem('localFilePath', this.localFilePath);
  }

  readLocalStorageValue(key) {
    return localStorage.getItem(key)
  }

  clientEmailValue(v: string) {
    if(localStorage.getItem('gdUserEmail') == null){
      this.gdEmail = v;
    localStorage.setItem('gdUserEmail', this.gdEmail);
    console.log('the value from set2 ' + this.gdEmail)
    }else if(localStorage.getItem('gdUserEmail') !== v){
      localStorage.removeItem('gdUserEmail')
      this.gdEmail = v;
      localStorage.setItem('gdUserEmail', this.gdEmail);
    console.log('the value from set2 ' + this.gdEmail)
    }else this.gdEmail = localStorage.getItem('gdUserEmail')
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
    }
 
 
}


