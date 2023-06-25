import { Component } from "@angular/core";
import { Product } from "../home/home.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent {
  carrinho: Array<Product> = [];

  constructor(private router:Router) {
    this.carrinho = JSON.parse(localStorage.getItem("carrinho")!);
  }

  removeItem(itemToRemove: Product) {
    // let carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')!) || []; // Verifica se há um carrinho existente no localStorage

    // Filtra o carrinho para remover o item
    let carrinhoAtual = this.carrinho.filter(
      (item: Product) => item.id !== itemToRemove.id
    );
    this.carrinho = carrinhoAtual;
    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));
    console.log("localStorage", localStorage);
  }
  goToPayment(){
    this.router.navigate(['payment'])
  }
}
