import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
}
)
export class service{
  response: any;
  constructor(public http: HttpClient){

  }
     accountDetails = [
        { bankName: 'HDFC Bank', accountType: 'Savings', balance: '$ 4,000', location: 'Nungambakkam, Chennai' },
        { bankName: 'ICICI Bank', accountType: 'Salary', balance: '$ 8,000', location: 'Velachery, Chennai' },
        { bankName: 'IDFC First Bank', accountType: 'Savings', balance: '$ 10,000', location: 'Adyar, Chennai' },
        { bankName: 'SBI', accountType: 'Savings', balance: '$ 13,000', location: 'Guduvanchery, Chennai' },
        { bankName: 'IDBI', accountType: 'Savings', balance: '$ 7,000', location: 'Avadi, Chennai' },
        { bankName: 'Indian Bank', accountType: 'Savings', balance: '$ 3,000', location: 'Tambaram, Chennai' }
      ];

      public addAccountDetail(account: any) {
          this.accountDetails.push(account);
          return this.accountDetails;
      }

      public getAccountDetails() {
        return this.accountDetails;
      }

       statements = [
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

      public addStatement(statement:any) {
          this.statements.push(statement);
          return this.statements;
      }

      public getStatements() {
          return this.statements;
      }
      
      public login(user: any) :Promise<any>{
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://192.168.1.4:8080/bankService/bank/login', user,
          { headers: headers }).toPromise().then(res => res);
      }
}


