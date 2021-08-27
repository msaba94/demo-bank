import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;
  constructor(public fb: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      userEmail: ['', Validators.required],
      userPassword: ['', Validators.required]
    });
  }

  login() {
    console.log(this.myForm.value);
    this.router.navigate(['/home']);
  }

  reset() {
    this.myForm.reset();
  }

}
