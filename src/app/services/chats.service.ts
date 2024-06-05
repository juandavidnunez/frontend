import { Injectable } from '@angular/core';
import { Chats } from '../models/chats.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(private http: HttpClient) {   }
  list(): Observable<Chats[]> {
    return this.http.get<{ data: Chats[] }>(`${environment.url_ms_funeraria_p3}/chats`) .pipe(
    map(response => response.data)
  );
  }
  delete(id:number){
    return this.http.delete<Chats>(`${environment.url_ms_funeraria_p3}/chats/${id}` );
  }
}
