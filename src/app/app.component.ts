import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SIP ACADEMY';
  logo:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcOuz17dyeXVHeUdUgaSRcvgDb7hO06tGjw&s";

  formation:string = "Fullstack";
}
