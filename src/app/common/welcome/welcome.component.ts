import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  private adhaarViewFlag: boolean = false;
  private otpViewFlag: boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.adhaarViewFlag = true;
  }

  shareRideFun(){
    this.router.navigate(['/shareRide']);
  }
  
  bookRideFun(){
    this.router.navigate(['/bookRide']);
  }

}
