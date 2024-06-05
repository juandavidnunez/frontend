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
  delete(id:number){
    return this.http.delete<Mensajes>(`${environment.url_ms_funeraria_p3}/mensajes/${id}` );
  }
}
