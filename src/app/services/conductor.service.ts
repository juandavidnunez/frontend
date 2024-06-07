import { Injectable } from '@angular/core';
import { Conductor } from '../models/conductor.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

 
  constructor(private http: HttpClient) {   }
  list(): Observable<Conductor[]> {
    return this.http.get< Conductor[] >(`${environment.url_ms_funeraria_p3}/conductores`) 
  
  }
  
  view(_id:string): Observable<Conductor>{
    return this.http.get< Conductor >(`${environment.url_ms_funeraria_p3}/conductores/${_id}`) ;
   }
   create(newConductor: Conductor):Observable<Conductor>{
    return this.http.post<Conductor>(`${environment.url_ms_funeraria_p3}/conductores` ,newConductor);
   }
   update(TheConductor: Conductor):Observable<Conductor>{

    return this.http.put<Conductor>(`${environment.url_ms_funeraria_p3}/conductores/${TheConductor._id}`,TheConductor );
   }
  delete(_id:string){

    return this.http.delete<Conductor>(`${environment.url_ms_funeraria_p3}/conductores/${_id}` );
  }
}
