import { UserService } from '../../Shared/service/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user : any;
  signUpForm : FormGroup;
  constructor( public fb : FormBuilder,public userService : UserService) {
    this.signUpForm = this.fb.group({
      email : [''],
      password : [''],
      name : ['']
    })
  }

  ngOnInit(): void {
  }

  signUp() {
    this.user = this.signUpForm.value;
      this.userService.signUp(this.user)
  }
}
