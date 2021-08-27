import { Component, OnInit } from '@angular/core';

interface Bill {
  title: string;
  children: any;
}

@Component({
  selector: 'app-pay-bill',
  templateUrl: './pay-bill.component.html',
  styleUrls: ['./pay-bill.component.css']
})
export class PayBillComponent implements OnInit {

  bills: Bill[] = [
    {
      title: 'Reacharge', children: [
        { title: "Mobile Reacharge", icon: "phone" },
        { title: "DTH / Cable TV", icon: "tv" },
        { title: "Google Play", icon: "play_arrow" },
        { title: "FASTag Reacharge", icon: "directions_car" }
      ]
    },
    {
      title: "Utility Bills", children: [
        { title: "Electricity", icon: "business" },
        { title: "Broadband / Landline", icon: "" },
        { title: "Postpaid mobile", icon: "" },
        { title: "Water", icon: "" },
        { title: "Piped Gas", icon: "" },
        { title: "Education", icon: "" },
        { title: "Gas Cylinder", icon: "" }
      ]
    },
    {
      title: "Finance & Tax", children: [
        { title: "Insurance", icon: "" },
        { title: "Loan EMI Payment", icon: "" },
        { title: "Tax / Service", icon: "" },]
    }, {
      title: "Others", children: [
        { title: "Subscription Fee", icon: "" },
        { title: "Housing Society", icon: "" },
        { title: "Hospital", icon: "" },
        { title: "Donation", icon: "" },
        { title: "Clubs & Associations", icon: "" },
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
