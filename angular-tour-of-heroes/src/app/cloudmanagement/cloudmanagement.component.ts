import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloudmanagement',
  templateUrl: './cloudmanagement.component.html',
  styleUrls: ['./cloudmanagement.component.css']
  //, template: ''
})
export class CloudmanagementComponent {
  title = 'CloudManagementComponent';
  checked = false;

  filters: String[] = [
    'Images to DropBox',
    'Documents to Google Drive'
  ]

  // filters = new FormArray([]);

  // addFilter(filter: String): void {
  //   this.filters.push(filter);
  // }

}
