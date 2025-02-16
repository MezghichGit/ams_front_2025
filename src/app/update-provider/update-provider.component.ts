import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-provider',
  standalone: false,
  templateUrl: './update-provider.component.html',
  styleUrl: './update-provider.component.css'
})
export class UpdateProviderComponent implements OnInit {

  public id: any;
  public name: any;
  public email: any;
  public address: any;



  constructor(private service: ProviderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // récupération de l'id depuis l'url active
    this.route.paramMap.subscribe(params => { this.id = params.get('id'); });
    console.log(this.id)

    // récupération du provider depuis le backend
    this.service.getProvider(this.id).subscribe(
      provider => {
        this.name = provider["name"];
        this.email = provider["email"];
        this.address = provider["address"];
      }
    );
  }

  updateProvider() {
    
    let provider = {
      "id": this.id,
      "name": this.name,
      "address": this.address,
      "email": this.email
    };

    this.service.updateProvider(provider).subscribe(
      response => {
        this.router.navigate(['listProvider']);
      }
    );
  }

}
