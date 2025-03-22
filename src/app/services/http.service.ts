import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly httpClient: HttpClient) { }
  // httpC = inject(HttpClient);

  readonly URL_BASE: string = environment.URL_BASE;
  readonly URI_CATEGORY: string = '/category'





  getCategories(estado?: any): Observable<any> {
    return this.httpClient.get(`${this.URL_BASE}${this.URI_CATEGORY}`, {params: { estado: estado}});
  }
}
