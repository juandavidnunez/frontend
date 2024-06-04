/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Theater } from '../models/theater.model';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {

  constructor(private http: HttpClient) {   }
  listar(): Observable<Theater[]> {
    return
    this.http.get<Theater[]>(`${environment.url_ms_cinema}/theater`);
    }
    eliminar(id:string){
    return
    this.http.delete<Theater>(`${environment.url_ms_cinema}/theater/${id}`,
    );
    }
}**/
