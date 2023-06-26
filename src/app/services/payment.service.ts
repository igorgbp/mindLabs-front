import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  // Exemplo de método para uma chamada GET
  generatePaymentQR():Observable<String> {
   let  body = {}
    return this.http.post<String>('http://localhost:4535/payment-pix', body);
  }
}
