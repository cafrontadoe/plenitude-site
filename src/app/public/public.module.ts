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
    DonationsComponent
  ],
  providers: [
    PlacesService,
  ],
})
export class PublicModule { }