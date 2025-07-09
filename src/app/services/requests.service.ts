import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Usuario } from '../login/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private apiUrl: string = "http://localhost:3001/";
  private http = inject(HttpClient);

  constructor() { }

  verifyUser(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiUrl}login`, user);
  }
}
