import { Component } from '@angular/core';
import { HomeComponent } from "./Pages/home/home.component";
import { RouterOutlet } from "../../node_modules/@angular/router/router_module.d-Bx9ArA6K";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Receitas da vó';
}
