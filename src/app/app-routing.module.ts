import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './common/welcome/welcome.component';
import { BookRideComponent } from './feature/book-ride/book-ride.component';
import { ShareRideComponent } from './feature/share-ride/share-ride.component';
// import {  } from './';
// import {  } from './';
// import {  } from './';

const appRoutes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'bookRide', component: BookRideComponent},
    {path: 'shareRide', component: ShareRideComponent},
    // {path: 'aadharVerify',component:AadharVerifyComponent},
    // {path: 'otpVerify',component:otpVerifyComponent},
    // {path: 'rideList', component: MRideListComponent},
    // {path: 'availableRides',component:AvailableRidesComponent},
    // {path: 'verification', component: MAuthenticationComponent},
    // {path: 'tab1', canActivate: [AuthGuard], component: MAuthenticationComponent},
    // // {path: 'verification', canActivate: [AuthGuard], component: MAuthenticationComponent},
   
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}