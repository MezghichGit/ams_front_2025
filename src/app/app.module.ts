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
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { SavModule } from './sav/sav.module';
import { RegistrationModule } from './registration/registration.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ListProvidersComponent,
    NavbarComponent,
    AddProviderComponent,
    PreffixeProvPipe,
    UpdateProviderComponent,
    ListArticlesComponent,
    AddArticleComponent,
    UpdateArticleComponent,
    SignupComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SavModule,
    RegistrationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService, // Remplacez par votre interceptor personnalisé
      multi: true
    },
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
