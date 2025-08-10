import { Component } from '@angular/core';
import { IngredienteListComponent } from './components/ingrediente-list/ingrediente-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IngredienteListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
