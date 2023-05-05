import { Component, Input, OnInit} from '@angular/core';
import { User } from 'src/app/model/user.model';
import { USER_TABLE_HEADERS } from '../table-headers/user-headers';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit{

  @Input()
  users!: User[];

  tableObjects!: any[];
  activeObjectType!: string;
  tableHeaders!: string[];


  constructor() {}

  ngOnInit(): void {

    const url = window.location.href;
    const urlComponents = url.split('/');

    console.log(urlComponents[3]);



    if (urlComponents[3] === 'user') {
      console.log(urlComponents[3]);
      this.tableObjects = this.users;
      this.activeObjectType = 'USER';
      console.log(this.activeObjectType);
      this.tableHeaders = USER_TABLE_HEADERS;
    }

    console.log(this.tableObjects[0].id);

  }

}
