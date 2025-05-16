import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Airline {
  id: string;
  name: string;
  identityColor: string;
  country: string;
}

export interface Flight {
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
}

@Injectable({
  providedIn: 'root'
})
export class AirlinesService {
  
  private base = 'https://raw.githubusercontent.com/NoNameLab/ISIS2603_Parcial2_S6_202510/refs/heads/main/flights';

  constructor(private http: HttpClient) {}

  
  getAirlines(): Observable<Airline[]> {
    return this.http.get<Airline[]>(`${this.base}.json`);
  }

  
  getAirline(id: string): Observable<Airline> {
    return this.getAirlines().pipe(
      map(list => {
        const a = list.find(x => x.id === id);
        if (!a) throw new Error(`Airline ${id} no encontrada`);
        return a;
      })
    );
  }

  
  getFlights(id: string): Observable<Flight[]> {
    return this.http.get<Flight[]>(`${this.base}/${id}.json`);
  }
}
