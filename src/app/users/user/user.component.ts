import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(userForm: NgForm) {
    this.userService.insertUser(userForm.value);
    this.resetForm(userForm);
  }

  resetForm(userForm?: NgForm) {
    if (userForm != null) {
      userForm.reset();
    }
    this.userService.selectedUser = {
      $key: null,
      firstName: '',
      lastName: ''
    };
  }

}
