import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProvidersComponent } from './list-providers/list-providers.component';
import { AddProviderComponent } from './add-provider/add-provider.component';

const routes: Routes = [
{ path: "listProvider", component: ListProvidersComponent },
{ path: "addProvider", component: AddProviderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
