import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public get<T>(url: string, httpOptions?: {}): Observable<any> {
    const httpGet$ = this.http.get<T>(url, httpOptions);
    return httpGet$;
  }
}
