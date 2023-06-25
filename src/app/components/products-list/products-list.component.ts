import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from 'src/app/screens/home/home.component';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state/state-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  produtoSelecionado: Product | null = null;

  constructor(private router: Router, private stateService: StateService) {
    this.stateService.selectedProductSubject.subscribe((produto) => {
      this.produtoSelecionado = produto;
    });
  }

  ngOnInit(): void {
    console.log(this.listProducts);
  }

  itemSelected(item: Product): void {
    console.log('press');
    // this.stateService.selecionarProduto(item); // Atualiza o produto selecionado no estado
    this.router.navigate(['/product']);
    localStorage.setItem('produtoSelecionado', JSON.stringify(item));
  }

  @Input() listProducts!: Product[];
}