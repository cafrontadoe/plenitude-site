import { NgModule } from '@angular/core';


import { PublicRoutingModule } from './public-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SliderComponent } from './slider/slider.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PlacesService } from '../shared/services/places.service';
import { DonationsComponent } from './donations/donations.component';
import { predicasComponent } from './predicas/predicas.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessDonationComponent } from './success-donation/success-donation.component';
import { TermsComponent } from './terms/terms.component';



@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    QuemSomosComponent,
    ContactComponent,
    LoginComponent,
    TestimonyComponent,
    SliderComponent,
    GalleryComponent,
    DonationsComponent,
    predicasComponent,
    SignInComponent,
    SignUpComponent,
    ContactFormComponent,
    SuccessDonationComponent,
    TermsComponent,    
  ],
  providers: [
    PlacesService,
  ],
})
export class PublicModule { }