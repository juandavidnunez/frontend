import { Injectable } from '@angular/core';
import { Traslados } from '../models/traslados.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrasladosService {

  constructor(private http: HttpClient) {   }
  list(): Observable<Traslados[]> {
    return this.http.get<{ data: Traslados[] }>(`${environment.url_ms_funeraria_p3}/traslados`) .pipe(
    map(response => response.data)
  );
  }
  delete(id:number){
    return this.http.delete<Traslados>(`${environment.url_ms_funeraria_p3}/traslados/${id}` );
  }
}
