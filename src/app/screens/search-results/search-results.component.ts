import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../home/home.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
     
  }
  productlist!:Product[]
  ngOnInit() {
   
  console.log('this',this.productlist)
    // console.log('state', state!['productList']);
}}
