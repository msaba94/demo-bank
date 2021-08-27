import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  transactionDate: string;
  particulars: string;
  debit: string;
  credit: string;
  balance: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    transactionDate: "25-Aug-2021", particulars: "UPI/MOB/123737138771/Zomato payment",
    debit: "$ 125.75", credit: "", balance: "$ 99,874.25"
  }
  , {
    transactionDate: "21-Aug-2021", particulars: "POS-VISA/JYOTHE & JYOTHE UNGAL Chennai/1233131311",
    debit: "$ 471.00", credit: "", balance: "$ 99,403.25"
  }, {
    transactionDate: "19-Aug-2021", particulars: "FD 10075180763 booked via Internet Banking",
    debit: "$ 70,000.00", credit: "", balance: "$ 29,403.25"
  }, {
    transactionDate: "19-Aug-2021", particulars: "UPI/MOB/123119723176/savings",
    debit: "", credit: "$ 10,000", balance: "$ 39,403.25"
  }, {
    transactionDate: "18-Aug-2021", particulars: "Standing Instruction To Account 10070546576",
    debit: "$ 5,000", credit: "", balance: "$ 34,403.25"
  },
];

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  displayedColumns: string[] = ['transactionDate', 'particulars', 'debit', 'credit', 'balance'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
