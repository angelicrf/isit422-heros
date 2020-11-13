import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filetransfer',
  templateUrl: './filetransfer.component.html',
  styleUrls: ['./filetransfer.component.css']
})
export class FiletransferComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
