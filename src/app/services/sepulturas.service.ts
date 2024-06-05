import { Injectable } from '@angular/core';
import { Sepulturas } from '../models/sepulturas.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SepulturasService {

  constructor(private http: HttpClient) {   }
  list(): Observable<Sepulturas[]> {
    return this.http.get<{ data: Sepulturas[] }>(`${environment.url_ms_funeraria_p3}/sepulturas`) .pipe(
    map(response => response.data)
  );
  }
  delete(id:number){
    return this.http.delete<Sepulturas>(`${environment.url_ms_funeraria_p3}/sepulturas/${id}` );
  }
}
