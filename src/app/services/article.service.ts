import { Injectable } from '@angular/core';
import { Provider } from './provider.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

export interface Article {
  id: number;
  label: string;
  price: string;
  picture: string;
  provider : Provider
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiArticles = environment.apiUrl+ 'articles/';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiArticles);
  }

  addArticle(article: any, idProvider:number): Observable<Article> {
    return this.http.post<Article>(this.apiArticles + idProvider, article);
  }

}
