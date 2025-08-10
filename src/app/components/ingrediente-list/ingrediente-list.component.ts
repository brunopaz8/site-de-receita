import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IngredienteService } from '../../Services/ingrediente.service';
import { ReceitaService } from '../../Services/receita.service';
import { Ingrediente } from '../../models/ingrediente.model';
import { Receita } from '../../models/receita.model';

@Component({
  selector: 'app-ingrediente-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './ingrediente-list.component.html',
  styleUrls: ['./ingrediente-list.component.css']
})
export class IngredienteListComponent implements OnInit {
  ingredientes: Ingrediente[] = [];
  selecionados: number[] = [];
  receitas: Receita[] = [];
  titulo: string = "";
  aviso: string = "";
  

  constructor(
    private ingredienteService: IngredienteService,
    private receitaService: ReceitaService
  ) {}

  ngOnInit(): void {
    this.ingredienteService.getAll().subscribe(data => {
      this.ingredientes = data;
    });
  }

  toggleSelecionado(id: number): void {
    if (this.selecionados.includes(id)) {
      this.selecionados = this.selecionados.filter(x => x !== id);
    } else {
      this.selecionados.push(id);
    }
  }

buscarReceitas() {
  if (this.selecionados.length === 0) {
    this.aviso = "Selecione ao menos um ingrediente";
    return;
  }

  this.receitaService.getByIngredientes(this.selecionados).subscribe({
    next: (resultado) => {
      this.receitas = resultado.receitas;
      this.titulo = resultado.achouExatas ? "Receitas encontradas:" : "Receitas sugeridas";
      if (resultado.achouExatas === true) {
        this.aviso = "";
      } else {
        this.aviso = "Não encontramos receitas com os ingredientes informados porem temos essas sugestões";
      }
      if (this.receitas.length === 0) {
        this.aviso ="Nenhuma receita encontrada nem sugestão disponível.";
      }
    },
    error: (err) => {
      console.error(err);
      this.aviso ="Erro ao buscar receitas";
    }
  });
}

  formatarIngredientes(ingredientes: { nome: string }[]): string {
    return ingredientes.map(i => i.nome).join(', ');
  }
}
