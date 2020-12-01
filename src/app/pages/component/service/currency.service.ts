import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  baseURl = environment.URL;
  constructor(private http: HttpClient) { }

  convert(baseCurrency) {
   return this.http.get(this.baseURl + '?base=' + baseCurrency);
  }
}
