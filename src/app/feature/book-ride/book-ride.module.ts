import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { BookRideComponent } from './book-ride.component';

const bookRideRoutes: Routes = [
    { path: '', component: BookRideComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    BookRideComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(bookRideRoutes)
  ],
  providers: []
})
export class BookRideModule { }