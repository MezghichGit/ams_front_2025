// src/app/services/provider.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Provider {
  id: number;
  name: string;
  address: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private apiUrl = 'http://127.0.0.1:8080/providers/'; // Remplacez par l'URL réelle de votre API

  constructor(private http: HttpClient) {}

  getProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.apiUrl);
  }

  deleteProvider(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }
  addProvider(provider: any): Observable<Provider> {
    return this.http.post<Provider>(this.apiUrl, provider);
  }
}
