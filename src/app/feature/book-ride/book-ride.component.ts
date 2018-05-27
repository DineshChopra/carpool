import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToHome(){
    this.router.navigate(['/']);
  }
}
