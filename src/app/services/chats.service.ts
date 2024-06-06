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
  view(id: number): Observable<Chats> {
    return this.http.get<Chats>(
      `${environment.url_ms_funeraria_p3}/chats/${id}`
    );
  }
  create(newChat: Chats): Observable<Chats> {
    return this.http.post<Chats>(
      `${environment.url_ms_funeraria_p3}/chats`,newChat
    );
  }
  update(theChat: Chats): Observable<Chats> {
    return this.http.put<Chats>(
      `${environment.url_ms_funeraria_p3}/chats/${theChat.id}`,theChat
    );
  }
  delete(id:number){
    return this.http.delete<Chats>(`${environment.url_ms_funeraria_p3}/chats/${id}` );
  }
}
