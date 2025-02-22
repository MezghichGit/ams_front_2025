import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavRoutingModule } from './sav-routing.module';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { ListFacturesComponent } from './list-factures/list-factures.component';


@NgModule({
  declarations: [
    AddFactureComponent,
    ListFacturesComponent
  ],
  imports: [
    CommonModule,
    SavRoutingModule
  ]
})
export class SavModule { }
