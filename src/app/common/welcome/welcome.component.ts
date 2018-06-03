import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwPush } from '@angular/service-worker';
import { WelcomeService } from './welcome.service';
/*
{
  "publicKey" : "BGqNfVOgHMHNGCc_1hvXEGgfxc4nUONZQ3PAHFJHP4JBjJzdqioWq5RLU1CcIit-Y9j8Rw8srt1h8UycluYa7ps",
  "privateKey" : "Oa_x8uENj80lnZoR853B4pc7n_I_9wAUQtKYrFb2Dow"
}
*/
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  private adhaarViewFlag = false;
  private otpViewFlag = false;
  readonly VAPID_PUBLIC_KEY = 'BGqNfVOgHMHNGCc_1hvXEGgfxc4nUONZQ3PAHFJHP4JBjJzdqioWq5RLU1CcIit-Y9j8Rw8srt1h8UycluYa7ps';
  sub: PushSubscription;

  constructor(private router: Router,
              public auth: LoginService,
              private swPush: SwPush,
              private service: WelcomeService) { }

  ngOnInit() {
    this.adhaarViewFlag = true;
  }

  shareRideFun() {
    this.router.navigate(['/shareRide']);
  }

  bookRideFun() {
    this.router.navigate(['/bookRide']);
  }
  loginUser(){
    this.router.navigate(['/login']);
  }  

  registerForPushNotification() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    .then(sub => {
      this.sub = sub;
      this.service.registerForPushNotification(sub).subscribe(
        () => console.log('Sent push subscription object to server.'),
        err =>  console.log('Could not send subscription object to server, reason: ', err)
    );
      console.log('Notification Subscription: ', sub);
    })
    .catch(err => console.error('Could not subscribe to notifications', err));
  }
  sendPushNotification() {
    this.service.sendNotification().subscribe();
  }

}
