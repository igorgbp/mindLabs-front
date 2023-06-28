import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../screens/login/login.component";
import { Address, UserLogged } from "../models/user";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class UserService {
  serverUrl!: string;
  userId!: number;
  constructor(private http: HttpClient, private router:Router) {
    this.serverUrl = environment.serverUrl;
   if(localStorage.getItem('user')?.length!=0){

  
    if(JSON.parse(localStorage.getItem('user')!)[0] != undefined){
      console.log('tem o sauce')
      console.log('asdf',JSON.parse(localStorage.getItem('user')!)[0])
      console.log('asdf')
      let user = JSON.parse(localStorage.getItem('user')!)[0]
    this.userId =parseInt(user.id!);
  // console.log( JSON.parse(localStorage.getItem('user')!)[0])
    // this.userId =23;
    } else{ this.router.navigate(['']) ;console.log('não sauce')}
    
  } }
  getId(){
    let user = JSON.parse(localStorage.getItem('user')!)[0]
    this.userId =parseInt(user.id!);
    return this.userId;
  }

  listUsers() {
    return this.http.get(this.serverUrl + "list-users");
  }
  login(data: any): Observable<UserLogged> {
    const body = { username: data.username, password: data.password };
    // console.log('log no service',this.http.post('http://localhost:4534/login', body) )
    return this.http.post<UserLogged>(this.serverUrl + "login", body);
  }
  signUp(data: any) {
    const body = {
      email: data.email,
      username: data.username,
      password: data.password,
      first_name: data.first_name,
      last_name: data.last_name,
      cpf: data.cpf,
    };
    console.log("service");
    return this.http.post(this.serverUrl + "cad-user", data);
  }
  updateUser(data: any) {
    console.log(data)
    const body = {
      email: data.email,
      username: data.username,
      password: data.password,
      first_name: data.first_name,
      last_name: data.last_name,
      cpf: data.cpf,
      id:this.getId()
    };
    console.log("service");
    return this.http.post(this.serverUrl + "update-user", body);
  }

  // address
  listUserAddress(): Observable<Address[]> {
    console.log("service");
    let body = { userId: this.getId() };
    return this.http.post<Address[]>(
      "http://localhost:4534/list-address",
      body
    );
  }

  cadAddress(id:number,address:Address) {
    let body = {id, address:address}
    console.log("cad", id);
    return this.http.post(this.serverUrl + "cad-address",  body);
  }

  
  rmAddress(idAddress:number) {
    let body = {iduser:this.getId(), idaddress:idAddress}
    console.log("service");
    return this.http.post(this.serverUrl + "remove-address",  body);
  }

  // favorites
  cadFavorite(productId: number) {
    let body = {userId:this.getId(), productId:productId}
    console.log("service");
    return this.http.post(this.serverUrl + "cad-favorite", body);
  }
}
