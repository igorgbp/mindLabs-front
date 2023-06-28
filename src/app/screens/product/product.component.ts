import { Component } from "@angular/core";
import { StateService } from "src/app/services/state/state-service.service";
import { Product } from "../home/home.component";
import { ProductService } from "src/app/services/product.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent {
  produtoSelecionado: Product | null = null;
  produtoArmazenado = localStorage.getItem("produtoSelecionado");
  products: Product[] = [];

  constructor(private productService: ProductService, private userService: UserService) {
    console.log(localStorage);
    this.produtoSelecionado = JSON.parse(this.produtoArmazenado!);
  }

  ngOnInit() {
    this.productService.listProducts().subscribe(
      (data) => {
        this.products = data;
        console.log(this.products);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  addToCart() {
    console.log('press')
    const carrinhoAtual = localStorage.getItem("carrinho")!.length>0?  JSON.parse(localStorage.getItem("carrinho")!) : []; // Verifica se há um carrinho existente no localStorage
    console.log(carrinhoAtual)
    carrinhoAtual.push(this.produtoSelecionado); // Adiciona o novo item ao carrinho

    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));
    console.log("storaaa", localStorage);
  }

  setFavorite(){
    this.userService.cadFavorite(this.produtoSelecionado!.id).subscribe(
      (data) => {
      
        console.log(this.products);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
