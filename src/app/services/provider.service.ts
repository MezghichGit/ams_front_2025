// src/app/services/provider.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

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
  private apiProviders = environment.apiUrl+ 'providers/'; // Remplacez par l'URL réelle de votre API

  constructor(private http: HttpClient) {}

  getProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.apiProviders);
  }

  deleteProvider(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiProviders}${id}`);
  }
  addProvider(provider: any): Observable<Provider> {
    const headers = new HttpHeaders();
   // headers.append('Content-Type', 'multipart/form-data');
  // return this.http.post<Provider>(this.apiProviders, provider,{headers});
    return this.http.post<Provider>(this.apiProviders, provider);
    
  }

  updateProvider(provider: any): Observable<Provider> {
    return this.http.put<Provider>(this.apiProviders, provider);
  }

  getProvider(id: number): Observable<Provider> {
    return this.http.get<Provider>(`${this.apiProviders}${id}`);
  }
}
