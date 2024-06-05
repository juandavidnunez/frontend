import { Injectable } from '@angular/core';
import { Cremaciones } from '../models/cremaciones.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CremacionesService {

  constructor(private http: HttpClient) {   }
  list(): Observable<Cremaciones[]> {
    return this.http.get<{ data: Cremaciones[] }>(`${environment.url_ms_funeraria_p3}/cremaciones`) .pipe(
    map(response => response.data)
  );
  }
  delete(id:number){
    return this.http.delete<Cremaciones>(`${environment.url_ms_funeraria_p3}/cremaciones/${id}` );
  }
}
