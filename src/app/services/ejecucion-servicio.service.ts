import { Injectable } from '@angular/core';
import { EjecucionServicio } from '../models/ejecucion-servicio.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EjecucionServicioService {

  constructor(private http: HttpClient) {   }
  list(): Observable<EjecucionServicio[]> {
    return this.http.get<{ data: EjecucionServicio[] }>(`${environment.url_ms_funeraria_p3}/ejecucion_servicio`) .pipe(
    map(response => response.data)
  );
  }
  delete(id:number){
    return this.http.delete<EjecucionServicio>(`${environment.url_ms_funeraria_p3}/ejecucion_servicio/${id}` );
  }
}
