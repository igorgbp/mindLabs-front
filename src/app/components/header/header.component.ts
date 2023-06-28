import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Product } from 'src/app/screens/home/home.component';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  search:string = '';
  productList!: Product[] | null;
  cartLength!:number;
  constructor(private router:Router,  private productService:ProductService){
    // if(JSON.parse(localStorage.getItem('carrinho')!) == undefined){
    //   // this.router.navigate([''])
    //   console.log('asdf')
    //   console.log(JSON.parse(localStorage.getItem('carrinho')!))

    
    // }else  this.cartLength = JSON.parse(localStorage.getItem("carrinho")!).length;
   
  }
  

  pressCart(){
  console.log('asdf')
  this.router.navigate(['/cart']);

}
pressFavorites(){
  console.log('asdf')
  this.router.navigate(['/favorites']);

}
pressUserPage(){
  console.log('asdf')
  this.router.navigate(['/user-page']);

}

// pressSearch(){
//   // this.router.navigate(['/search']);
//   this.productService.listProducts().subscribe(
//     (data) => {
//       // console.log('data',data)
//       this.productList = data.filter((item) =>
//         item.name.toLowerCase().includes(this.search.toLowerCase())
//       );
//       console.log(this.productList)
//      this.router.navigate(['/search']);
//     },
//     (error) => {
//       console.error(error);
//     }
    
//   );
// }

pressSearch(){
  this.router.navigate(['/search']);
  // this.productService.listProducts().subscribe(
  //   (data) => {
  //     // console.log('data',data)
  //     this.productList = data.filter((item) =>
  //       item.name.toLowerCase().includes(this.search.toLowerCase())
  //     );
  //     console.log(this.productList)
  //    this.router.navigate(['/search']);
  //   },
  //   (error) => {
  //     console.error(error);
  //   }
    
  // );
}
}
