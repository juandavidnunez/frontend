import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mensajes } from '../models/mensajes.model';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private http: HttpClient) {   }
  list(): Observable<Mensajes[]> {
    return this.http.get<{ data: Mensajes[] }>(`${environment.url_ms_funeraria_p3}/mensajes`) .pipe(
    map(response => response.data)
  );
  }
  view(id: number): Observable<Mensajes> {
    return this.http.get<Mensajes>(
      `${environment.url_ms_funeraria_p3}/mensajes/${id}`
    );
  }
  create(newMensaje: Mensajes): Observable<Mensajes> {
    return this.http.post<Mensajes>(
      `${environment.url_ms_funeraria_p3}/mensajes`,newMensaje
    );
  }
  update(theMensaje: Mensajes): Observable<Mensajes> {
    return this.http.put<Mensajes>(
      `${environment.url_ms_funeraria_p3}/mensajes/${theMensaje.id}`,theMensaje
    );
  }
  delete(id:number){
    return this.http.delete<Mensajes>(`${environment.url_ms_funeraria_p3}/mensajes/${id}` );
  }
}
