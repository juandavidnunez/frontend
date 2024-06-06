import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Sede } from '../models/sede.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  constructor(private http: HttpClient) {   }
  list(): Observable<Sede[]> {
    return this.http.get<{ data: Sede[] }>(`${environment.url_ms_funeraria_p3}/sedes`) .pipe(
    map(response => response.data)
  );
  }
  view(id:number): Observable<Sede>{
    return this.http.get< Sede >(`${environment.url_ms_funeraria_p3}/sedes/${id}`) ;
   }
   create(newSede: Sede):Observable<Sede>{
    return this.http.post<Sede>(`${environment.url_ms_funeraria_p3}/sedes` ,newSede);
   }
   update(TheSede: Sede):Observable<Sede>{
    return this.http.put<Sede>(`${environment.url_ms_funeraria_p3}/sedes/${TheSede.id}`,TheSede );
   }
  delete(id:number){
    return this.http.delete<Sede>(`${environment.url_ms_funeraria_p3}/sedes/${id}` );
  }
}
