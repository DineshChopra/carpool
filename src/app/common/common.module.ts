import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../Common/header/header.component';
import { FooterComponent } from '../Common/footer/footer.component';
import { WelcomeComponent } from '../Common/welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, WelcomeComponent]
})
export class CommonModule { }
