import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// import { SharedModule } from '../../shared/shared.module';

import { RouterModule, Routes } from '@angular/router';


import { ContactComponent } from './contact/contact.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';



const routes: Routes = [

  { path: '', component: QuemSomosComponent },
  { path: 'contact', component: ContactComponent },
      // { path: 'login', component: LoginComponent },
      // { path: 'sign-up', component: SignUpComponent }
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