import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { ListFacturesComponent } from './list-factures/list-factures.component';
import { MainsavComponent } from './mainsav/mainsav.component';

const routes: Routes = [
 
  {
    path: '',
    component: MainsavComponent,
    children:[
      {
        path: 'list',
       component: ListFacturesComponent,
      },
      {
        path: 'add',
       component: AddFactureComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavRoutingModule { }
