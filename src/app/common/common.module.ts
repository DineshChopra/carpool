import { NgModule } from '@angular/core';
import { HeaderComponent } from '../Common/header/header.component';
import { FooterComponent } from '../Common/footer/footer.component';
import { WelcomeComponent } from '../Common/welcome/welcome.component';

@NgModule({
  imports: [
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    WelcomeComponent
  ],
  declarations: [HeaderComponent, FooterComponent, WelcomeComponent]
})
export class CommonModule { }
