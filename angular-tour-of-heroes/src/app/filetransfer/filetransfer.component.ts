import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';

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
    "assets/images/box.png"
  ];

  serviceNames = [
    "Dropbox",
    "Google Drive",
    "OneDrive",
    "Box"
  ]

  serviceAccounts = [
    "jdoe@hotmail.com",
    "janedoe@gmail.com",
    "(No account associated)",
    "(No account associated)"
  ]

  service1 = 0;
  service2 = 1;

  folders: String[] = [
    'Folder 01'
  ]

  files1: String[] = [
    'Document 01',
    'Document 02'
  ]
  
  files2: String[] = [
    'Document 01'
  ]

  filters: String[];

  constructor(public filterService: FilterService) {}

  ngOnInit(): void {
    this.getFilters();
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
}
