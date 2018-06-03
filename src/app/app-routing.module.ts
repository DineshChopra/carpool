import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './common/welcome/welcome.component';
// import { BookRideComponent } from './feature/book-ride/book-ride.component';
// import { ShareRideComponent } from './feature/share-ride/share-ride.component';

const appRoutes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'bookRide', loadChildren: './feature/book-ride/book-ride.module#BookRideModule'},
    {path: 'shareRide', loadChildren: './feature/share-ride/share-ride.module#ShareRideModule'},
    {path: 'login', loadChildren: './core/login/login.module#LoginModule'}
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