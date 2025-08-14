import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTitleTodasReceitasComponent } from "../../components/menu-title-todas-receitas/menu-title-todas-receitas.component";
import { ListaReceitasComponent } from "../../components/lista-receitas/lista-receitas.component";
import { MenuBottomComponent } from "../../components/menu-bottom/menu-bottom.component";


@Component({
  selector: 'app-todas-receitas',
  standalone: true,
  imports: [CommonModule, MenuTitleTodasReceitasComponent, ListaReceitasComponent, MenuBottomComponent], 
  templateUrl: './todas-receitas.component.html',
  styleUrls: ['./todas-receitas.component.css']
})
export class TodasReceitasComponent {
  
}
