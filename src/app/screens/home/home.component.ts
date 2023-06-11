import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
constructor(private productService:ProductService){}
ngOnInit() {
  
  this.productService.listProducts().subscribe(
    (data) => {
      console.log(data);
      console.log('deu bom ')

    },
    (error) => {
      console.error(error);
    }
  );
}
}
