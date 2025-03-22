import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly httpClient: HttpClient) { }

    readonly URL_BASE: string = environment.URL_BASE;
    readonly URI_PRODUCT: string = environment.URI_PRODUCT;
    readonly URI_NEW_PRODUCT: string = environment.URI_NEW_PRODUCT;

  getProducts(): Observable<any>{
    return this.httpClient.get(`${this.URL_BASE}${this.URI_PRODUCT}`)
  }
}
