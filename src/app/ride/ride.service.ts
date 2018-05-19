import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { RideUser } from './rideUser.model';

@Injectable({
  providedIn: 'root'
})
export class RideService {
  subscribeUsers: AngularFireList<any>;
  rideUserList: RideUser[];
  constructor(private firebase: AngularFireDatabase) {
    this.getSubscribeUsers();
  }

  getSubscribeUsers() {
    this.subscribeUsers = this.firebase.list('subscribeUsers');
    const x = this.firebase.list('subscribeUsers');
    x.snapshotChanges().subscribe(item => {
      this.rideUserList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.rideUserList.push(y as RideUser);
      });
      console.log('RideUserList : ', this.rideUserList);
    });
    return this.subscribeUsers;
  }
  addSubscribeUsers(sub: any) {
    const user = {userSubscriptionId: sub.endpoint};
    return this.subscribeUsers.push(user);
  }
}
