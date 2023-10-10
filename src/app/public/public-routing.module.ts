import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DonationsComponent } from './donations/donations.component';
import { SociaisComponent } from './sociais/sociais.component';
import { predicasComponent } from './predicas/predicas.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SuccessDonationComponent } from './success-donation/success-donation.component';
import { TermsComponent } from './terms/terms.component';



const routes: Routes = [

  { path: '', component: ContactComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'testimony', component: TestimonyComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'donations', component: DonationsComponent },
  { path: 'success-donation', component: SuccessDonationComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'predicas', component: predicasComponent },
  { path: 'Sociais', component: SociaisComponent },
  { path: 'sign-in', component: SignInComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PublicRoutingModule { }
