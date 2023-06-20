import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DonationsComponent } from './donations/donations.component';



const routes: Routes = [

  { path: '', component: ContactComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'testimony', component: TestimonyComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'donations', component: DonationsComponent },
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