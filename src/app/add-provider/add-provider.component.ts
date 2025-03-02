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
  selectedFile!: File;
  constructor(private providerService: ProviderService, private router: Router) { }
  ngOnInit() {
  }
  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
    //console.log(this.selectedFile);
  }
  /*createProvider(myform: any) {
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
    
  }*/
    createProvider(myform:any) {
      const provider = new FormData();
      provider.append('imageFile', this.selectedFile,this.selectedFile.name);
      //provider.append('imageName',this.selectedFile.name);
      provider.append('name', myform.value.providerName);
      provider.append('email', myform.value.providerEmail);
      provider.append('address', myform.value.providerAdress);
  
      this.providerService.addProvider(provider).subscribe(
        (response) =>{
          console.log(response);
          this.router.navigate(['listProvider']);
        }, error => {
          console.error(error);
          // Handle error, e.g., show an error message
        }
      );
  
    }

}
