import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Command } from '../_interfaces/command';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  execute(command: Command): Observable<any> {
    return this.httpClient.post("http://localhost:8080/execute", command);
  }
}
