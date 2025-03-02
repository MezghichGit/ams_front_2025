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
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
{ path: "listProvider", component: ListProvidersComponent, canActivate:[AuthGuardService] },
{ path: "addProvider", component: AddProviderComponent, canActivate:[AuthGuardService]},
{ path: "updateProvider/:id", component: UpdateProviderComponent, canActivate:[AuthGuardService]},
{ path: "listArticles", component: ListArticlesComponent, canActivate:[AuthGuardService]},
{ path: "addArticle", component: AddArticleComponent, canActivate:[AuthGuardService]},
{ path: "signup", component: SignupComponent},
{ path: "login", component: LoginComponent},
{ path: "logout", component: LogoutComponent, canActivate:[AuthGuardService]},
{ path: 'sav', loadChildren: () => import('./sav/sav.module').then(m => m.SavModule) , canActivate:[AuthGuardService]},
{ path: 'registration', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) , canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
