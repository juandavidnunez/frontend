import { Injectable } from '@angular/core';
import { Pagos } from '../models/pagos.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor(private http: HttpClient) {   }
  list(): Observable<Pagos[]> {
    return this.http.get<{ data: Pagos[] }>(`${environment.url_ms_funeraria_p3}/pagos`) .pipe(
    map(response => response.data)
  );
  }
  delete(id:number){
    return this.http.delete<Pagos>(`${environment.url_ms_funeraria_p3}/pagos/${id}` );
  }
}
