import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FireBaseService } from '../fire-base.service';



@Component({
  selector: 'app-share-ride',
  templateUrl: './share-ride.component.html',
  styleUrls: ['./share-ride.component.css']
})
export class ShareRideComponent implements OnInit {
  public ride: any = {};
  constructor(private router: Router, public api:FireBaseService) { }

  ngOnInit() {
    this.ride.startLocation='';
  }
  goToHome(){
    this.router.navigate(['/']);
  }

}
