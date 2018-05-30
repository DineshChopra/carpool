import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';
import { WelcomeComponent } from '../common/welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    WelcomeComponent
  ],
  declarations: [HeaderComponent, FooterComponent, WelcomeComponent]
})
export class CommonFeatureModule { }
