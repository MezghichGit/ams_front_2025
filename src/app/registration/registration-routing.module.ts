import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRegistrationComponent } from './main-registration/main-registration.component';
import { TFRegistrationComponent } from './tfregistration/tfregistration.component';
import { RFRegistrationComponent } from './rfregistration/rfregistration.component';

const routes: Routes = [
  {
      path: '',
      component: MainRegistrationComponent,
      children:[
        {
          path: 'tf',
         component: TFRegistrationComponent,
        },
        {
          path: 'rf',
         component: RFRegistrationComponent,
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
