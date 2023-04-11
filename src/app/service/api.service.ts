import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private UrlApi = 'https://zelda.fanapis.com/api'

  public getData(option: string): Observable<any> {
    return this.http.get<any>(`${this.UrlApi}/${option}?limit=100`)
  }

}
