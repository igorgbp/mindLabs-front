import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from 'src/app/screens/home/home.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  constructor(private router: Router,) { }

  ngOnInit(): void {
   console.log(this.listProducts)
  }
  press(){
    console.log('press')
    this.router.navigate(['/product']);

  }
  @Input() listProducts!: Product[];
}
