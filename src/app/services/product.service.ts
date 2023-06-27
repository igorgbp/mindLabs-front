import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../screens/home/home.component";
import { environment } from "src/environments/environment.prod";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {
    
  }
   serverUrl = environment.serverUrl;

  listProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.serverUrl+"list-products");
  }
  listProductsFavorite(userId: number): Observable<Product[]> {
    let body={userId:userId}
    return this.http.post<Product[]>(
      this.serverUrl+"list-products-favorite",
      body
    );
  }

}
