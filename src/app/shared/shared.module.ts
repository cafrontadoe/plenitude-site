import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [
    MaterialModule,
    FormsModule
  ],
  declarations: [],
})

export class SharedModule { }
