import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../screens/login/login.component';
import { AddressList, UserLogged } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  serverUrl = environment.serverUrl;

  listUsers() {
    console.log('asdf', this.http.get('http://localhost:4534/list-users'))
    return this.http.get(this.serverUrl+'list-users');
  }
  login(data:any):Observable<UserLogged> {
    const body = { username: data.username, password: data.password };
    // console.log('log no service',this.http.post('http://localhost:4534/login', body) )
    return this.http.post<UserLogged>(this.serverUrl+'login', body);
  }
  signUp(data:any) {
    const body = { email: data.email, username: data.username, password: data.password, first_name: data.first_name, last_name: data.last_name, cpf: data.cpf  };
    console.log('service', )
    return this.http.post(this.serverUrl+'cad-user', body);
  }
  listUserAddress(userId: number):Observable<AddressList> {
    console.log('service')
    let body={userId:userId}
    return this.http.post<AddressList>(
      "http://localhost:4534/list-user-address",
      body
    );
  }

}