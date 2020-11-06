import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloudmanagement',
  templateUrl: './cloudmanagement.component.html',
  styleUrls: ['./cloudmanagement.component.css']
})
export class CloudmanagementComponent {
  title = 'modeltestproject';
  signedin(){
    console.log("signedin");
}
  signedup(){
    console.log("signedup");
  }
  menu_info(){
    console.log("menu info clicked");
  }
}
