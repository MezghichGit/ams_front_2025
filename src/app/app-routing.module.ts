import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProvidersComponent } from './list-providers/list-providers.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';

const routes: Routes = [
{ path: "listProvider", component: ListProvidersComponent },
{ path: "addProvider", component: AddProviderComponent},
{ path: "updateProvider/:id", component: UpdateProviderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
