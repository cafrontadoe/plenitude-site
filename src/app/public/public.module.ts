import { NgModule } from '@angular/core';


import { PublicRoutingModule } from './public-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SliderComponent } from './slider/slider.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PlacesService } from '../shared/services/places.service';
import { DonationsComponent } from './donations/donations.component';
import { predicasComponent } from './predicas/predicas.component';
import { SociaisComponent } from './sociais/sociais.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';



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
    TestimonyComponent,
    SliderComponent,
    GalleryComponent,
    DonationsComponent,
    predicasComponent,
    SignInComponent,
    SignUpComponent,
    
  ],
  providers: [
    PlacesService,
  ],
})
export class PublicModule { }