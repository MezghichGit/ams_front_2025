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
    UpdateArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SavModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }
