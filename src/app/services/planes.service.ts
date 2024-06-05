import { Injectable } from '@angular/core';
import { Planes } from '../models/planes.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  constructor(private http: HttpClient) {   }
  list(): Observable<Planes[]> {
    return this.http.get<{ data: Planes[] }>(`${environment.url_ms_funeraria_p3}/planes`) .pipe(
    map(response => response.data)
  );
  }
  delete(id:number){
    return this.http.delete<Planes>(`${environment.url_ms_funeraria_p3}/planes/${id}` );
  }
}
