import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

// import { Ride } from './feature.module';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {
  rideList: AngularFireList<any>;
  actualRideList : Array<any>;
  constructor(private firebase: AngularFireDatabase) { 
    this.getData();
  }

  getData() {
    this.rideList = this.firebase.list('rideList');
    this.rideList.snapshotChanges().subscribe(rideList => {
      this.actualRideList = [];
      rideList.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.actualRideList.push(y);
      });
     console.log('actualRideList : ', this.actualRideList);
    });
    return this.rideList;
  }

  insertRide(ride) {
    console.log('insertRide : ride : ', ride);
    this.rideList.push({
      startLocation: ride.startLocation,
      endLocation: ride.endLocation,
      time: ride.time,
      name: ride.name,
      vehicalRegNumber: ride.vehicalRegNumber
    }).then(success => {
      console.log('ride data is saved successfully : ', success);
    }, err => {
      console.log('ride data is saved problem :---- ', err);

    });
  }
}
