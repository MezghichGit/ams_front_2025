import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { MainRegistrationComponent } from './main-registration/main-registration.component';
import { RFRegistrationComponent } from './rfregistration/rfregistration.component';
import { TFRegistrationComponent } from './tfregistration/tfregistration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainRegistrationComponent,
    RFRegistrationComponent,
    TFRegistrationComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class RegistrationModule { }
