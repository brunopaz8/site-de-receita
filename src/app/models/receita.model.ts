import { Ingrediente } from './ingrediente.model';

export interface Receita {
  id: number;
  nome: string;
  descricao: string;
  fotoUrl: string;
  linkTutorial: string;
  tipo: string;
  ingredientes: Ingrediente[];
}
