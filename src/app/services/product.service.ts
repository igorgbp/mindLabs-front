import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../screens/home/home.component";
import { environment } from "src/environments/environment.prod";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  serverUrl!: string;
  userId!: number;
  constructor(private http: HttpClient, private router:Router) {
    this.serverUrl = environment.serverUrl;
    // let user = JSON.parse(localStorage.getItem('user')!)[0]
    if(JSON.parse(localStorage.getItem('user')!)[0] != undefined){
      console.log('asdf',localStorage.getItem('user'))
      
      let user = JSON.parse(localStorage.getItem('user')!)[0]
    this.userId =parseInt(user.id!);
  // console.log( JSON.parse(localStorage.getItem('user')!)[0])
    // this.userId =23;
    } else this.router.navigate([''])
  }
  

  listProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.serverUrl + "list-products");
  }
  listProductsFavorite(): Observable<Product[]> {
    let body = { userId: this.userId };
    return this.http.post<Product[]>(
      this.serverUrl + "list-products-favorite",
      body
    );
  }
}
