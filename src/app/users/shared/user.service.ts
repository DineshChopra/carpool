import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { User } from './user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    userList: AngularFireList<any>;
    selectedUser: User = new User();
    constructor(private firebase: AngularFireDatabase) {

    }
    getData() {
        this.userList = this.firebase.list('user');
        return this.userList;
    }

    insertUser(user: User) {
        this.userList.push({
            firstName: user.firstName,
            lastName: user.lastName
        });
    }

}
