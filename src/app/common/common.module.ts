import { NgModule } from '@angular/core';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';
import { WelcomeComponent } from '../common/welcome/welcome.component';

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
