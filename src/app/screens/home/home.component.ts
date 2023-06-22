import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
constructor(private productService:ProductService){}
products:Product[]= []
ngOnInit() {
  this.productService.listProducts().subscribe(
    (data) => {
      this.products = data;
      console.log(this.products)
    },
    (error) => {
      console.error(error);
    }
  );
}

}
export class Product {
  id!: number;
  name!: string;
  description!: string;
  image!: string;
  rating!: number;
  price!:number;
  category!:number;
  storage!:number;
  discount!:number;
  discount_price!:number;
}