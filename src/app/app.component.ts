import { Component } from '@angular/core';
import { IngredienteListComponent } from './components/ingrediente-list/ingrediente-list.component';
import { MenuTitleComponent } from "./Components/menu-title/menu-title.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IngredienteListComponent, MenuTitleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
