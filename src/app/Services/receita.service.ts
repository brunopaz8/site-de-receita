import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of, switchMap, map } from 'rxjs';
import { Receita } from '../models/receita.model';

export interface ResultadoReceita {
  achouExatas: boolean;
  receitas: Receita[];
}

@Injectable({ providedIn: 'root' })
export class ReceitaService {
  private apiUrl = 'http://localhost:5068/api/Receita'; 

  constructor(private http: HttpClient) {}

  getByIngredientes(ingredienteIds: number[]): Observable<ResultadoReceita> {
    let params = new HttpParams();
    ingredienteIds.forEach(id => {
      params = params.append('ingredientesIds', id.toString());
    });

    return this.http.get<Receita[]>(`${this.apiUrl}/por-ingredientes-exato`, { params }).pipe(
      switchMap(receitas => {
        if (receitas && receitas.length > 0) {
          return of<ResultadoReceita>({ achouExatas: true, receitas });
        } else {
          return this.http.get<Receita[]>(`${this.apiUrl}/por-ingredientes-sugeridos`, { params }).pipe(
            map(sugeridas => ({ achouExatas: false, receitas: sugeridas }) as ResultadoReceita)
          );
        }
      }),
      catchError(() => this.http.get<Receita[]>(`${this.apiUrl}/por-ingredientes-sugeridos`, { params }).pipe(
        map(sugeridas => ({ achouExatas: false, receitas: sugeridas }) as ResultadoReceita)
      ))
    );
  }

  getAll(): Observable<Receita[]>{
    return this.http.get<Receita[]>(this.apiUrl);
  }
}


