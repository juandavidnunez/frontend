import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Ciudades } from '../models/ciudades.model';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  constructor(private http: HttpClient) {   }
  list(): Observable<Ciudades[]> {
    return this.http.get<{ data:Ciudades[] }>(`${environment.url_ms_funeraria_p3}/ciudades`) .pipe(
    map(response => response.data)
  );
  }
  view(id:number): Observable<Ciudades>{
    return this.http.get<Ciudades >(`${environment.url_ms_funeraria_p3}/ciudades/${id}`) ;
   }
   create(newCiudad:Ciudades):Observable<Ciudades>{
    return this.http.post<Ciudades>(`${environment.url_ms_funeraria_p3}/ciudades` ,newCiudad);
   }
   update(TheCiudad:Ciudades):Observable<Ciudades>{
    return this.http.put<Ciudades>(`${environment.url_ms_funeraria_p3}/ciudades/${TheCiudad.id}`,TheCiudad );
   }
  delete(id:number){
    return this.http.delete<Ciudades>(`${environment.url_ms_funeraria_p3}/ciudades/${id}` );
  }
}
