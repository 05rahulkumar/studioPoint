import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
   // login=new FormGroup({
  //   email:new FormControl('',[Validators.required, Validators.email]),
  //   password:new FormControl('',[Validators.required])
  // })
  login=this.fb.group({
    email:['', Validators.required, Validators.email],
    password:['',Validators.required]
  })
  signup=new FormGroup({
    name:new FormControl('',[ Validators.required]),
    email:new FormControl('',[ Validators.required, Validators.email]),
    password:new FormControl('',[ Validators.required]),
    check:new FormControl('',[Validators.required])
  })
  ngOnInit(): void {
  }

  
// login form
loginForm(){
  console.log(this.login.value);
  
  
  }
  //signup form
  signupForm(){
    console.log(this.signup.value);
    
  }
  
  
    // login validator
  get email(){
    return this.login.get('email')
  }
  get password(){
    return this.login.get('password')
  }
  //signup validators
  get name(){
    return this.signup.get('name')
  }
  get Email(){
    return this.signup.get('email')
  }
  get Password(){
    return this.signup.get('password')
  }
  get check(){
    return this.signup.get('check')
  }
}
