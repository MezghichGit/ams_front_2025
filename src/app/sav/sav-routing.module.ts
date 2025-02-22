import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { ListFacturesComponent } from './list-factures/list-factures.component';

const routes: Routes = [
  { path: "addFacture", component: AddFactureComponent },
  { path: "listFactures", component: ListFacturesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavRoutingModule { }
