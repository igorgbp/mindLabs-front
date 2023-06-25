import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../home/home.component';
import { StateService } from 'src/app/services/state/state-service.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  produtoSelecionado: Product | null = null;
  listProducts!: Product[];

  constructor(private router: Router, private stateService: StateService, private productService:ProductService) {
    this.stateService.selectedProductSubject.subscribe((produto) => {
      this.produtoSelecionado = produto;
    });
  }

ngOnInit() {
  this.productService.listProducts().subscribe(
    (data) => {
      this.listProducts = data;
      console.log(this.listProducts)
    },
    (error) => {
      console.error(error);
    }
  );
}

  itemSelected(item: Product): void {
    console.log('press');
    this.stateService.selecionarProduto(item); // Atualiza o produto selecionado no estado
    this.router.navigate(['/product']);
  }


}
