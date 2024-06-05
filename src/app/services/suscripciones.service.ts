import { Injectable } from '@angular/core';
import { Suscripciones } from '../models/suscripciones.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionesService {

  constructor(private http: HttpClient) {   }
  list(): Observable<Suscripciones[]> {
    return this.http.get<{ data: Suscripciones[] }>(`${environment.url_ms_funeraria_p3}/suscripciones`) .pipe(
    map(response => response.data)
  );
  }
  delete(id:number){
    return this.http.delete<Suscripciones>(`${environment.url_ms_funeraria_p3}/suscripciones/${id}` );
  }
}
