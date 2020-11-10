import { Router } from '@angular/router';
import { UserService } from '../Shared/service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public userService: UserService,
    public router: Router
  ) {
    this.signInForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {

  }
  loginUser() {
    this.userService.signIn(this.signInForm.value)
    this.signInForm.setValue({
      email : '',
      password : ''
    })
  }
}
