import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-share-ride',
  templateUrl: './share-ride.component.html',
  styleUrls: ['./share-ride.component.css']
})
export class ShareRideComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToHome(){
    this.router.navigate(['/']);
  }

}
