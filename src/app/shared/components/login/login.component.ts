import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UsersService } from '../../service/users.service';
import { Router } from '@angular/router';
import { nospacebarvalidators } from '../../const/nospacebar';
import { CustomRegex } from '../../const/validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  inputtype: string = 'password';
  icon: string = 'visibility_off';
  ishavingaccount: boolean = true;
  userole: string[] = ['HOD', 'STAFF'];
  department: string[] = [
    'Electrical Eng',
    'Civil Eng',
    'Computer Science',
    'Data Science',
  ];
  loginform!: FormGroup;
  signupform!: FormGroup;
  loginobj!: any;
  constructor(private _usersService: UsersService, private _router: Router) {}

  ngOnInit(): void {
    this.createloginform();
    this.createsigupform();
  }

  //  onLogin(username:HTMLInputElement,password:HTMLInputElement){
  //   console.log(username.value);

  //  }

  onvisible() {
    console.log('hii');
    //  if(this.inputtype === 'password'){
    //   this.inputtype='text'
    //  }else{
    //    this.inputtype = 'password'
    //  }
    this.inputtype === 'password'
      ? (this.inputtype = 'text')
      : (this.inputtype = 'password');
    this.icon === 'visibility_off'
      ? (this.icon = 'visibility')
      : (this.icon = 'visibility_off');
  }

  onloginform() {
    console.log(this.loginform);
  }

  onuserlogin() {
    //  let username=this.l
    let username = this.loginform.value.username;
    let pass = this.loginform.value.password;
    let role = this.loginform.value.userole
    this._usersService.getusers().subscribe((res) => {
      console.log(res);
      this.loginobj = res.find(
        (ele) => ele.username === username && ele.password === pass
      );
      localStorage.setItem('username',username)
      localStorage.setItem('password',pass)
      localStorage.setItem('userole',this.loginobj.userole )
      if(this.loginobj){
        if(this.loginobj.userole ==='HOD'){
          this._router.navigate(['hod']);
        }else if (this.loginobj.userole === 'STAFF') {
             this._router.navigate(['staff']);
           }
      }
    });
  }

  createloginform() {
    this.loginform = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  get getusernamecontrol() {
    return this.loginform.get('username') as FormControl;
  }

  get getallcontrols() {
    return this.loginform.controls;
  }

  onsignup() {
    //  console.log(this.signupform);
    if(this.signupform.valid){
      let obj: any = {
        ...this.signupform.value,
      };
      console.log(obj);
      this._usersService.getsingleusers(obj).subscribe((res) => {
        console.log(res);
      });
    }
   
  }

  createsigupform() {
    this.signupform = new FormGroup({
      fname: new FormControl(null, [Validators.required,nospacebarvalidators.nospace]),
      lname: new FormControl(null,[Validators.required,nospacebarvalidators.nospace]),
      email: new FormControl(null,[Validators.required,Validators.pattern(CustomRegex.email)]),
      Contact: new FormControl(null,[Validators.required,nospacebarvalidators.nospace,Validators.pattern(CustomRegex.number)]),
      username: new FormControl(null,[Validators.required,nospacebarvalidators.nospace]),
      password: new FormControl(null,[Validators.required,Validators.pattern(CustomRegex.password)]),
      dept: new FormControl(null,[Validators.required]),
      userole: new FormControl(null,[Validators.required]),
    });
  }

 get getallsignupcontrol(){
 return this.signupform.controls
  }

  onregisteruser() {}
}
