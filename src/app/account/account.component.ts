import { Component, OnInit } from '@angular/core';
import { service } from '../service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  displayedColumns: string[] = ['bankName', 'accountType', 'balance', 'location'];
  dataSource :any;

  constructor(public service:service) { }

  ngOnInit(): void {
    this.dataSource = this.service.getAccountDetails();
  }

}
