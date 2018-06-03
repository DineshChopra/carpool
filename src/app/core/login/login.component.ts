import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public auth:LoginService) { }

  ngOnInit() {
  }
  async signInWithGoogle(){
    await this.auth.googleLogin();
  }
  async signInWithFacebook(){
    await this.auth.facebookLogin();
  }
}
