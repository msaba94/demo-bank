import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  bankName: string;
  accountType: string;
  balance: string;
  location: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { bankName: 'HDFC Bank', accountType: 'Savings', balance: '$ 4,000', location: 'Nungambakkam, Chennai' },
  { bankName: 'ICICI Bank', accountType: 'Salary', balance: '$ 8,000', location: 'Velachery, Chennai' },
  { bankName: 'IDFC First Bank', accountType: 'Savings', balance: '$ 10,000', location: 'Adyar, Chennai' },
  { bankName: 'SBI', accountType: 'Savings', balance: '$ 13,000', location: 'Guduvanchery, Chennai' },
  { bankName: 'IDBI', accountType: 'Savings', balance: '$ 7,000', location: 'Avadi, Chennai' },
  { bankName: 'Indian Bank', accountType: 'Savings', balance: '$ 3,000', location: 'Tambaram, Chennai' }
];

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  displayedColumns: string[] = ['bankName', 'accountType', 'balance', 'location'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
