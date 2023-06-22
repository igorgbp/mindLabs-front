import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../screens/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // Exemplo de método para uma chamada GET
  listProducts():Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:4534/list-products');
  }


  // Outros métodos para outras chamadas à API
}