import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';

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
}
