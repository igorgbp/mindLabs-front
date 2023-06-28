import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/payment';
import { environment } from 'src/environments/environment.prod';
// require('dotenv').config();
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  // private readonly token: string;

  constructor(private http: HttpClient) {
    // this.token = process.env.MPTOKEN;
  }
  Payment(transaction: Transaction):Observable<any> {
   console.log(transaction)
    const apiKey = environment.apipix;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    };

    return this.http.post<any>('https://api.mercadopago.com/v1/payments', transaction, { headers });
  }
}