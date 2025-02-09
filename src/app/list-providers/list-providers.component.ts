import { Component, OnInit } from '@angular/core';
import { Provider, ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-list-providers',
  standalone: false,
  templateUrl: './list-providers.component.html',
  styleUrl: './list-providers.component.css'
})
export class ListProvidersComponent implements OnInit {
  providers: Provider[] = [];

  constructor(private providerService: ProviderService) {
  }

  ngOnInit(): void {
    this.loadProviders();
  }

  loadProviders(): void {
    this.providerService.getProviders().subscribe({
      next: (data) => this.providers = data,
      error: (err) => console.error('Erreur lors du chargement des fournisseurs:', err)
    });
  }
}
