import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { IngredienteListComponent } from "../../components/ingrediente-list/ingrediente-list.component";
import { MenuBottomComponent } from "../../components/menu-bottom/menu-bottom.component";

@Component({
  selector: 'app-home',
  imports: [MenuTitleComponent, IngredienteListComponent, MenuBottomComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
