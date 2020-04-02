import { Injectable } from '@angular/core';
import { Station } from '../_interfaces/station';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationService {


  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  create(station: Station): Observable<any> {
    return this.httpClient.post("http://localhost:8080/stations", station);
  }

  update(station: Station): Observable<any> {
    return this.httpClient.put(`http://localhost:8080/stations/${station.id}`, station);
  }

  getAll(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/stations");
  }

  delete(station: Station): Observable<any> {
    return this.httpClient.delete(`http://localhost:8080/stations/${station.id}`);
  }
}
