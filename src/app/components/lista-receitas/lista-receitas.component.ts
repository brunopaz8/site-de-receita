import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReceitaService } from '../../Services/receita.service';
import { Receita } from '../../models/receita.model';

@Component({
  selector: 'app-lista-receitas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-receitas.component.html',
  styleUrl: './lista-receitas.component.css'
})
export class ListaReceitasComponent implements OnInit {
  receitas: Receita[] = [];

  error: string | null = null;

  constructor(private receitaService: ReceitaService) {}

  ngOnInit(): void {
    this.receitaService.getAll().subscribe({
      next: (data) => {
        this.receitas = data;
        
      },
      error: () => {
        this.error = 'Erro ao carregar receitas';
      }
    });
  }
  
  formatarIngredientes(ingredientes: { nome: string }[]): string {
    return ingredientes.map(i => i.nome).join(', ');
  }
}
