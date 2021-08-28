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
  IsLogin:boolean = false;
  enterAny: boolean= false;
  showLogin:string ="";
  showLogin2:string ="";
  IsShowSign:boolean=false;
  IsShowSign2:boolean=false;
  password: any="";
  IsConfirmPassword: boolean=false;

  constructor(public fb: FormBuilder, public router: Router, public service: service) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      userEmail: ['', [Validators.required ,Validators.email]],
      userPassword: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      userEmail: ['',[Validators.required ,Validators.email]],
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
    if(this.myForm.valid){
    this.service.login(this.user).then(data => {
      console.log(data);
      if (data.success){
        this.router.navigate(['/home']);
      }else{
        this.showLogin=data.message;
        this.IsLogin=true;
        this.enterAny=false;
      }
    });
  }else{
    this.enterAny=true;
    this.IsLogin=false;
  }
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
      this.service.register(this.user).then(data => {
        console.log(data);
        if(data.success){
          this.IsShowSign=true;
          this.IsShowSign2= false;
        }else{
          this.showLogin2=data.message;
          this.IsShowSign2= true;
          this.IsShowSign=false;
        }
      })
    } 
  }
  checkConfirmPassword(){
    this.password = this.registerForm.get('userPassword')?.value;
    this.registerForm.get('userConfirmPassword')?.valueChanges.subscribe((key)=>{
     if(this.password==key){
      this.IsConfirmPassword=false;
      this.registerForm.valid;
     }else{
      this.IsConfirmPassword=true;
      this.registerForm.invalid;
     }
    })
  }
}
