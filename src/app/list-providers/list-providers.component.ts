import { Component, OnInit } from '@angular/core';
import { Provider, ProviderService } from '../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-providers',
  standalone: false,
  templateUrl: './list-providers.component.html',
  styleUrl: './list-providers.component.css'
})
export class ListProvidersComponent implements OnInit {

  providers: Provider[] = [];

  constructor(private providerService: ProviderService, private router:Router) {
  }
  navigateToList() {
    console.log("test");
    this.router.navigate(['addProvider']);
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

  deleteProvider(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce Provider ?')) {
      this.providerService.deleteProvider(id).subscribe({
        next: () => {
          //this.providers = this.providers.filter(provider => provider.id !== id);
          console.log('Fournisseur supprimé avec succès.');
          this.loadProviders();
        },
        error: (err) => console.error('Erreur lors de la suppression:', err)
      });
    }
  }
}
