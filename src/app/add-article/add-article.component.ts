import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Provider, ProviderService } from '../services/provider.service';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  standalone: false,
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent implements OnInit {

  providers: Provider[] = [];
  constructor(private articleService: ArticleService, private providerService: ProviderService, private router:Router) { }


  ngOnInit(): void {
    this.loadProviders();
  }


  createArticle(articleForm: any) {
    //console.log(article)
    let article  ={
      label: articleForm.label,
      price: articleForm.price,
      picture: articleForm.picture
    }
    
    this.articleService.addArticle(article,articleForm.idProvider).subscribe(
      response => {
        //console.log(response);
        this.router.navigate(['listArticles']);
      }
    );
  }

  loadProviders(): void {
    this.providerService.getProviders().subscribe({
      next: (data) => this.providers = data,
      error: (err) => console.error('Erreur lors du chargement des fournisseurs:', err)
    });
  }
}
