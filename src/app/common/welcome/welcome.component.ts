import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../core/login/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  private adhaarViewFlag: boolean = false;
  private otpViewFlag: boolean = false;
  
  constructor(private router: Router, public auth:LoginService) { }

  ngOnInit() {
    this.adhaarViewFlag = true;
  }

  shareRideFun(){
    this.router.navigate(['/shareRide']);
  }
  
  bookRideFun(){
    this.router.navigate(['/bookRide']);
  }
  async signInWithGoogle(){
    await this.auth.googleLogin();
  }

}
