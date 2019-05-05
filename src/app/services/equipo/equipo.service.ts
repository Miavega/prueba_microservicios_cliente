import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const path = 'http://localhost:8081/v1/';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private http: HttpClient) { }

  get = function(endpoint) {
    return this.http.get(path + endpoint);
  }

  post = function(endpoint, element) {
    return this.http.post(path + endpoint, element, httpOptions);
  }

  put = function(endpoint, element , ID) {
    return this.http.put(path + endpoint + '/' + ID, element, httpOptions);
  }

  delete = function(endpoint, element) {
    return this.http.delete(path + endpoint + '/' + element.Id, httpOptions);
  }

}
