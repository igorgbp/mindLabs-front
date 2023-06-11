import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // Exemplo de método para uma chamada GET
  listProducts() {
    console.log('asdf', this.http.get('http://localhost:4534/list-products'))
    return this.http.get('http://localhost:4534/list-products');
  }


  // Outros métodos para outras chamadas à API
}