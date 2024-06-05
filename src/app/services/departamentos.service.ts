import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Departamentos } from '../models/departamentos.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  constructor(private http: HttpClient) {   }
  list(): Observable<Departamentos[]> {
    return this.http.get<{ data: Departamentos[] }>(`${environment.url_ms_funeraria_p3}/departamentos`) .pipe(
    map(response => response.data)
  );
  }
  
  delete(id:number){
    return this.http.delete<Departamentos>(`${environment.url_ms_funeraria_p3}/departamentos/${id}` );
  }
}
