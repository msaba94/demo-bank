import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { service } from '../service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;
  registerForm!: FormGroup;
  user: any

  constructor(public fb: FormBuilder, public router: Router, public service: service) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      userEmail: ['', Validators.required],
      userPassword: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      userEmail: ['', Validators.required],
      userName: ['', Validators.required],
      userPassword: ['', Validators.required],
      userConfirmPassword: ['', Validators.required]

    });
  }

  login() {
    this.user = {
      emailId: this.myForm.value.userEmail,
      password: this.myForm.value.userPassword,
    }
    this.service.login(this.user).then(data => {
      console.log(data);
      if (data.success){
        this.router.navigate(['/home']);
      }
    });
  }

  reset() {
    this.myForm.reset();
    this.registerForm.reset();
  }

  signUp(){
    if(this.registerForm.valid){
      this.user = {
        fullName: this.registerForm.value.userName,
        emailId: this.registerForm.value.userEmail,
        password: this.registerForm.value.userPassword,
      }
    }

    this.service.register(this.user).then(data => {
      console.log(data);
    })
    //this.router.navigate(['/home']);
  }
}
