import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import { GdCloudService } from '../gd-cloud.service';
import { GDClientCredentials } from '../gdClientCredentials';
import { convertCompilerOptionsFromJson } from 'typescript';
let clFile: string[];

@Component({
  selector: 'app-filetransfer',
  templateUrl: './filetransfer.component.html',
  styleUrls: ['./filetransfer.component.css']
})
export class FiletransferComponent implements OnInit {

  leftServiceForm = false;
  rightServiceForm = false;
  
  serviceIcons = [
    "assets/images/dropbox.png",
    "assets/images/googledrive.png",
    "assets/images/onedrive.png",
    "assets/images/box.png",
    "assets/images/folder.png"
  ];

  serviceNames = [
    "Dropbox",
    "Google Drive",
    "OneDrive",
    "Box",
    "Local Files"
  ]

  serviceAccounts = [
    "jdoe@hotmail.com",
    localStorage.getItem('gdUserEmail'),
    "(No account associated)",
    "(No account associated)",
    localStorage.getItem('localFilePath')
  ]

  service1 = 0;
  service2 = 1;

  folders: String[] = [
    'Folder 01'
  ]

  files1: String[] = [];
  
  files2: String[]= [
    'Document 01'
  ];

  filters: String[];

  constructor(public filterService: FilterService,private gdService: GdCloudService, private gdcl:GDClientCredentials) {}

  ngOnInit(): void {
    this.getFilters();
  }

  async getLocalFiles() {
    this.leftServiceForm = false
    let filePath = this.serviceAccounts[4];
    const files = await fetch('/api/Files', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        path: filePath
      })
    })
    .then(response => response.json())
    .then(data => {
      data.forEach((file) => {
        this.files1.push(file);
      });
      console.log(data)
    })
    .catch(err => console.log(err))
  }

  filterList(fil: String[], srv: number): string {
    let fList = "";
    let cnt = 0;
    fil.forEach((value, index) => {
      if(value.includes(this.serviceNames[srv])) {
        if(cnt != 0) {
          fList += ", " + value.substr(0, value.indexOf(" "));
        }
        else
          fList += value.substr(0, value.indexOf(" "));
        cnt++;
      }
    })

    return fList;
  }

  getFilters(): void {
    this.filters = this.filterService.getFilters();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      }
    }

  /** Predicate function that only allows filtered types to be dropped into a list */
  filterPredicate(item: CdkDrag<String>) {
    return item.data === "";
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return false;
  }
  async getFiles() {
    this.leftServiceForm = false
    return await new Promise((resolve,reject) => {
      return gapi.client
      .request({
        method: 'GET',
        path:
          'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
      })
      .then(async () => {
        let displayItems:any = await this.gdService.listGoogleDriveFiles();   
          return resolve(displayItems);
      })
    }) 
  }
  async displayClientFiles(){
       let holdClientFilesToDisplay = await this.getFiles()
       console.log("displayClientFiles " + holdClientFilesToDisplay);
       let keys = Object.keys(holdClientFilesToDisplay);
       for(let i = 0; i < keys.length; i++){
        this.files1.push((holdClientFilesToDisplay[i]));
      };
       return this.files1
  }
 
}
