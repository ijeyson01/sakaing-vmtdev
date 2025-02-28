import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly httpClient: HttpClient) { }
  // httpC = inject(HttpClient);

  readonly URL_BASE: string = 'http://localhost:3000/api';
  readonly URI_PRODUCT: string = '/productos/listar';
  readonly URI_CATEGORY: string = '/categoria/listar'



  getProducts() {
    return this.httpClient.get(`${this.URL_BASE}${this.URI_PRODUCT}`, {params: {estado: 'TRUE'}})
  }
}
