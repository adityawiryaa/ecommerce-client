import { UpdateUser } from './../../Shared/Models/user';
import { UserService } from '../../Shared/service/user.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  address : any
  createAdress : FormGroup
  
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    age : new FormControl(''),
    firstname : new FormControl(''),
    lastname : new FormControl(''),
    address : new FormControl('')
  })

  constructor(private userService : UserService, private route: ActivatedRoute, public fb : FormBuilder) {
    this.createAdress = this.fb.group({
      country : [''],
      province : [''],
      city : [''],
      district : [''],
      village : [''],
      phone : [''],
      zip : [''],
    })
   }

  ngOnInit(): void {
  }
  updateUser(): void {
    const user : UpdateUser = {
      name : this.profileForm.get('name').value,
      password : this.profileForm.get('password').value,
      firstname : this.profileForm.get('firstname').value,
      lastname : this.profileForm.get('lastname').value,
      address : this.profileForm.get('address').value,
      age : this.profileForm.get('age').value,
    };
    this.userService.updateUser(user).subscribe(res => {
      Swal.fire('Good','Update Success','success').then(res =>{location.reload()})
    })
  }
  createAdressUser(): void {
    this.address = this.createAdress.value;
    this.userService.createAdressUser(this.address)
  }
  
}
