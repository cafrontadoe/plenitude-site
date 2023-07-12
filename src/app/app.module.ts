import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material/material.module';
import { FooterComponent } from './footer/footer.component';
import { SociaisComponent } from './public/sociais/sociais.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { AuthService } from './shared/services/auth.service';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SociaisComponent,
    DashboardComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    RecaptchaV3Module,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    AuthService,
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.RECAPTCHA.SITE_KEY
    },
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
