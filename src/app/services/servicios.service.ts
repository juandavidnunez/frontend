import { Injectable } from '@angular/core';
import { Servicios } from '../models/servicios.model';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) {   }
  list(): Observable<Servicios[]> {
    return this.http.get<{ data: Servicios[] }>(`${environment.url_ms_funeraria_p3}/servicios`) .pipe(
    map(response => response.data)
  );
  }
  delete(id:number){
    return this.http.delete<Servicios>(`${environment.url_ms_funeraria_p3}/servicios/${id}` );
  }
}
