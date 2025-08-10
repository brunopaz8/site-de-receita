import { Ingrediente } from './ingrediente.model';

export interface Receita {
  id: number;
  nome: string;
  descricao: string;
  fotoUrl: string;
  tipo: string;
  ingredientes: Ingrediente[];
}
