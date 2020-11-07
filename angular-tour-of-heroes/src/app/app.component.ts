import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
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
