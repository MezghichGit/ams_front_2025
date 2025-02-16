import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProvidersComponent } from './list-providers/list-providers.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { FormsModule } from '@angular/forms';
import { PreffixeProvPipe } from './pipes/preffixe-prov.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListProvidersComponent,
    NavbarComponent,
    AddProviderComponent,
    PreffixeProvPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }
