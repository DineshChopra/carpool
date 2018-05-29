import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireBaseService } from '../fire-base.service';


@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {

  constructor(private router: Router, private api: FireBaseService) { }

  ngOnInit() {
    this.api.getData();
  }
  goToHome(){
    this.router.navigate(['/']);
  }
}
