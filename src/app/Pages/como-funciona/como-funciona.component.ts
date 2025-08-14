import { Component } from '@angular/core';
import { MenuTitleTodasReceitasComponent } from "../../components/menu-title-todas-receitas/menu-title-todas-receitas.component";
import { InstrucoesComponent } from "../../components/instrucoes/instrucoes.component";
import { MenuBottomComponent } from "../../components/menu-bottom/menu-bottom.component";

@Component({
  selector: 'app-como-funciona',
  imports: [MenuTitleTodasReceitasComponent, InstrucoesComponent, MenuBottomComponent],
  templateUrl: './como-funciona.component.html',
  styleUrl: './como-funciona.component.css'
})
export class ComoFuncionaComponent {

}
