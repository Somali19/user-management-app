import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  user: User = {
    name: '',
    age: undefined,
    gender:'',
    salary: undefined,
    address:''
  };
  submitted = false;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  
  saveUser(): void {
    const data = {
      name: this.user.name,
      age: this.user.age,
      gender: this.user.gender,
      salary: this.user.salary,
      address: this.user.address,
    };
    this.userService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newUser(): void {
    this.submitted = false;
    this.user = {
      name: '',
      age: 0,
      gender:'',
      salary:0,
      address:''
    };
  }

}
