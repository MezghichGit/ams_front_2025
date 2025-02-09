import { Component, OnInit } from '@angular/core';
import { Provider,ProviderService } from '../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-provider',
  standalone: false,
  templateUrl: './add-provider.component.html',
  styleUrl: './add-provider.component.css'
})
export class AddProviderComponent implements OnInit {
 
  constructor(private providerService: ProviderService, private router: Router) { }
  ngOnInit() {
  }
  createProvider(myform: any) {
    let provider  ={
      name: myform.value.name,
      address: myform.value.address,
      email: myform.value.email
    }
    
    this.providerService.addProvider(provider).subscribe(
      response => {
        //console.log(response);
        this.router.navigate(['listProvider']);
      }
    );
    
  }

}
