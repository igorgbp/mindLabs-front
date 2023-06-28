import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/product';
import { Product } from '../home/home.component';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-categorie-area',
  templateUrl: './categorie-area.component.html',
  styleUrls: ['./categorie-area.component.scss']
})
export class CategorieAreaComponent {
  categorySelected: Category | null = null;
  catStorage = localStorage.getItem("categorySelected");
  productList!: Product[] | null;
  
  constructor(private route: ActivatedRoute, private productService:ProductService) {
    this.categorySelected = JSON.parse(this.catStorage!);

   }

  ngOnInit() {
    
    console.log(this.categorySelected?.name)
    this.listProducts()
  }

  listProducts(){
    this.productService.listProducts().subscribe(
      (data) => {
        console.log('data',data)
        this.productList = data.filter((item)=>item.category.toString() == this.categorySelected?.id)
        
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
