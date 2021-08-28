import { Component, OnInit } from '@angular/core';
import { service } from '../service';

@Component({
  selector: 'app-create-fd',
  templateUrl: './create-fd.component.html',
  styleUrls: ['./create-fd.component.css']
})
export class CreateFdComponent implements OnInit {

  dataSource :any;
  constructor(public service: service) { }

  ngOnInit(): void {
    this.dataSource = this.service.getAccountDetails();
  }

}
