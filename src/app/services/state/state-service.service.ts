import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/screens/home/home.component';
@Injectable({
  providedIn: 'root'
})
export class StateService {

  selectedProductSubject: BehaviorSubject<Product | null>;

  constructor() {
    this.selectedProductSubject = new BehaviorSubject<Product | null>(null);
  }

  selecionarProduto(produto: Product): void {
    this.selectedProductSubject.next(produto);
  }

  limparSelecao(): void {
    this.selectedProductSubject.next(null);
  }
}
