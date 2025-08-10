import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingrediente } from '../models/ingrediente.model';

@Injectable({ providedIn: 'root' })
export class IngredienteService {
  private apiUrl = 'http://localhost:5068/api/Ingrediente'; 

  constructor(private http: HttpClient) {}

  getAll(): Observable<Ingrediente[]> {
    return this.http.get<Ingrediente[]>(this.apiUrl);
  }
}
