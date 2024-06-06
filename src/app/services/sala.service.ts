import { Injectable } from '@angular/core';
import { Sala } from '../models/sala.model';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  constructor(private http: HttpClient) { }

  list(): Observable<Sala[]> {
    return this.http.get<{ data: Sala[] }>(`${environment.url_ms_funeraria_p3}/salas`).pipe(
      map(response => response.data),
      catchError(this.handleError)
    );
  }

  view(id: number): Observable<Sala> {
    return this.http.get<Sala>(`${environment.url_ms_funeraria_p3}/salas/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  create(newSala: Sala): Observable<Sala> {
    return this.http.post<Sala>(`${environment.url_ms_funeraria_p3}/salas`, newSala).pipe(
      catchError(this.handleError)
    );
  }

  update(TheSala: Sala): Observable<Sala> {
    return this.http.put<Sala>(`${environment.url_ms_funeraria_p3}/salas/${TheSala.id}`, TheSala).pipe(
      catchError(this.handleError)
    );
  }

  delete(id: number): Observable<Sala> {
    return this.http.delete<Sala>(`${environment.url_ms_funeraria_p3}/salas/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    // Aquí puedes personalizar la gestión de errores
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
