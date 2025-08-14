import { Routes } from '@angular/router';
import { TodasReceitasComponent } from './Pages/todas-receitas/todas-receitas.component';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
  {
    path: 'todas-receitas',
    component: TodasReceitasComponent
  },
  {
    path: ``,
    component: HomeComponent,
    pathMatch: `full`
  }
];
