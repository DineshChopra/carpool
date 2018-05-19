import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { RideService } from './ride.service';

/*
{"publicKey":"BHxVaHt28ADZRoJXuAJfc4au036-7YoHXA89ebFdPjpQhYIlFNfhF8X7spJ_OWWuwdPGWeCjtuL5_vRhqL5nISs",
       "privateKey":"HEOGQ7PSvGa17jWSf9TEIlcQClHF9ZegNT9mY91dbiw"}
       
{"publicKey":"BKHDcnwUlMJWryRZXVVGH2Ie3VHGMkk_jHl0M45foQSsrLrw8xFZgB2WP2OJ6KB3PEM3UWr9_PrBuD86hi9sOUU",
"privateKey":"Vj_YmhtkHE5wNYFdxNcZRYR5YJwXYrvz4C8_0j03p7Y"}
*/
@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.css']
})
export class RideComponent implements OnInit {
  isUserSubscribed: boolean;
  constructor(private swPush: SwPush,
              public rideService: RideService) { }
  readonly VAPID_PUBLIC_KEY = 'BKHDcnwUlMJWryRZXVVGH2Ie3VHGMkk_jHl0M45foQSsrLrw8xFZgB2WP2OJ6KB3PEM3UWr9_PrBuD86hi9sOUU';
  ngOnInit() {
  }

  subscribeToNotifications() {
    // enable service worker
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then( (sub) => {
      console.log('Notification subscription : ', sub);
      const userSubscription = this.rideService.addSubscribeUsers(sub).then(
        res => {
          console.log('new user subscription is done successfully : ', res);
          this.isUserSubscribed = true;
        });
    }).catch(err => {
      console.error('could not subscribe to notification : ', err);
    });
  }

  shareRide() {
    console.log('shareRide is called ');
  }

}
