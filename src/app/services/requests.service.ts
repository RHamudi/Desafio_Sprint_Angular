import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Usuario } from '../login/usuario';
import { Observable } from 'rxjs';
import {  VehicleData, VehicleList, VehicleListResponse } from '../dashboard/vehicle';

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

  vehicleList(): Observable<VehicleListResponse> {
    return this.http.get<VehicleListResponse>(`${this.apiUrl}vehicles`);
  }

  vehicleData(vin: string): Observable<VehicleData> {
    return this.http.post<VehicleData>(`${this.apiUrl}VehicleData`, {vin: vin});
  }
}
