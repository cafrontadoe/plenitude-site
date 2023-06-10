import { NgModule } from '@angular/core';


import { PublicRoutingModule } from './public-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { InstructionComponent } from './instruction/instruction.component';
import { SliderComponent } from './slider/slider.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';



@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
  ],
  declarations: [
    QuemSomosComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    // SignUpComponent,
    InstructionComponent,
    SliderComponent
  ]  
})
export class PublicModule { }