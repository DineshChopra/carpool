import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';
import { WelcomeComponent } from '../common/welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    WelcomeComponent
  ],
  declarations: [HeaderComponent, FooterComponent, WelcomeComponent]
})
export class CommonFeatureModule { }
