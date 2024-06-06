import { Injectable } from '@angular/core';
import { Feretro } from '../models/feretro.model';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeretroService {

  constructor(private http: HttpClient) {   }
  list(): Observable<Feretro[]> {
    return this.http.get<{ data: Feretro[] }>(`${environment.url_ms_funeraria_p3}/feretros`) .pipe(
    map(response => response.data)
  );
  }
  
  view(id:number): Observable<Feretro>{
    return this.http.get< Feretro >(`${environment.url_ms_funeraria_p3}/feretros/${id}`) ;
   }
   create(newFeretro: Feretro):Observable<Feretro>{
    return this.http.post<Feretro>(`${environment.url_ms_funeraria_p3}/feretros` ,newFeretro);
   }
   update(TheFeretro: Feretro):Observable<Feretro>{
    return this.http.put<Feretro>(`${environment.url_ms_funeraria_p3}/feretros/${TheFeretro.id}`,TheFeretro );
   }
  delete(id:number){
    return this.http.delete<Feretro>(`${environment.url_ms_funeraria_p3}/feretros/${id}` );
  }
}
