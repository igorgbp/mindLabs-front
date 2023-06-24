import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../home/home.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(private route: ActivatedRoute) { }
  item!:Product;
  asdf:any;
  ngOnInit() {
    this.asdf = this.route.snapshot.paramMap.get('item');
    console.log(this.asdf);}
}
