import { Component, OnInit } from '@angular/core';
import { service } from '../service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  displayedColumns: string[] = ['transactionDate', 'particulars', 'debit', 'credit', 'balance'];
  dataSource: any;
  

  constructor(public service: service) { }

  ngOnInit(): void {
    this.dataSource = this.service.getStatements();
  }

}
