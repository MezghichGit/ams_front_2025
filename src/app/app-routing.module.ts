import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProvidersComponent } from './list-providers/list-providers.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { AddArticleComponent } from './add-article/add-article.component';

const routes: Routes = [
{ path: "listProvider", component: ListProvidersComponent },
{ path: "addProvider", component: AddProviderComponent},
{ path: "updateProvider/:id", component: UpdateProviderComponent},
{ path: "listArticles", component: ListArticlesComponent},
{ path: "addArticle", component: AddArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
