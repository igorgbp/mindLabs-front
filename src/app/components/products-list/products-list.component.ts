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
  itemSelected(item:Product){
    console.log('press')
    console.log(item)
    this.router.navigate(['/product', item]);
    // [routerLink]="['/cat-list', name]"
  }
  @Input() listProducts!: Product[];
}
