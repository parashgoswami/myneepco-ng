import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      loginId: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
      password:  ['',Validators.required]
    });
  }
  login() {
    console.log(this.loginForm.value);
    const returnUrl = 'home';
    this.router.navigateByUrl(returnUrl);
  }

  get loginId(){
    return this.loginForm.get('loginId');
  }

  get password(){
    return this.loginForm.get('password');
  }

}
