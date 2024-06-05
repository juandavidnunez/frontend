import { Injectable } from '@angular/core';
import { Comentarios } from '../models/comentarios.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private http: HttpClient) {   }
  list(): Observable<Comentarios[]> {
    return this.http.get<{ data: Comentarios[] }>(`${environment.url_ms_funeraria_p3}/comentarios`) .pipe(
    map(response => response.data)
  );
  }
  delete(id:number){
    return this.http.delete<Comentarios>(`${environment.url_ms_funeraria_p3}/comentarios/${id}` );
  }
}
