import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {   }
  list(): Observable<Cliente[]> {
    return this.http.get< Cliente[] >(`${environment.url_ms_funeraria_p3}/clientes`) 
  
  }
  
  view(_id:string): Observable<Cliente>{
    return this.http.get< Cliente >(`${environment.url_ms_funeraria_p3}/clientes/${_id}`) ;
   }
   create(newCliente: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(`${environment.url_ms_funeraria_p3}/clientes` ,newCliente);
   }
   update(TheCliente: Cliente):Observable<Cliente>{

    return this.http.put<Cliente>(`${environment.url_ms_funeraria_p3}/clientes/${TheCliente._id}`,TheCliente );
   }
  delete(_id:string){

    return this.http.delete<Cliente>(`${environment.url_ms_funeraria_p3}/clientes/${_id}` );
  }
}
