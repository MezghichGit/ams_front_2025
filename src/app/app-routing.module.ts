import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProvidersComponent } from './list-providers/list-providers.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
{ path: "listProvider", component: ListProvidersComponent },
{ path: "addProvider", component: AddProviderComponent},
{ path: "updateProvider/:id", component: UpdateProviderComponent},
{ path: "listArticles", component: ListArticlesComponent},
{ path: "addArticle", component: AddArticleComponent},
{ path: "signup", component: SignupComponent},
{ path: "login", component: LoginComponent},
{ path: "logout", component: LogoutComponent},
{ path: 'sav', loadChildren: () => import('./sav/sav.module').then(m => m.SavModule) },
{ path: 'registration', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
