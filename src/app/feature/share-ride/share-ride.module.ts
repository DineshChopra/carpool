import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { ShareRideComponent } from './share-ride.component';

const shareRideRoutes: Routes = [
    { path: '', component: ShareRideComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ShareRideComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(shareRideRoutes)
  ],
  providers: []
})
export class ShareRideModule { }