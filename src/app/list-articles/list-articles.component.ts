import { Component, OnInit } from '@angular/core';
import { Article, ArticleService } from '../services/article.service';

@Component({
  selector: 'app-list-articles',
  standalone: false,
  templateUrl: './list-articles.component.html',
  styleUrl: './list-articles.component.css'
})
export class ListArticlesComponent implements OnInit{

  articles : Article[]=[];
  constructor(private articleService:ArticleService){}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articleService.getArticles().subscribe({
      next: (data) => {this.articles = data,console.log(data)},
      error: (err) => console.error('Erreur lors du chargement des articles:', err)
    });
  }
}
