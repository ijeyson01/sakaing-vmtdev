import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private readonly httpClient: HttpClient) { }
  
  private readonly URL_BASE: string = environment.URL_BASE;
  private readonly PATH_BRAND: string = environment.PATH_BRAND;
  private readonly PATH_NEW_BRAND: string = environment.PATH_NEW_BRAND;

  getBrands(estado?: any): Observable<any> {
    return this.httpClient.get(`${this.URL_BASE}${this.PATH_BRAND}`, {params: { estado: estado}});
  } 

  newBrand(dataBrand: any): Observable<any> {
    return this.httpClient.post(`${this.URL_BASE}${this.PATH_NEW_BRAND}`, dataBrand);
  }
}
