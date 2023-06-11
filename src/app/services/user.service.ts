import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Exemplo de método para uma chamada GET
  listUsers() {
    console.log('asdf', this.http.get('http://localhost:4534/list-users'))
    return this.http.get('http://localhost:4534/list-users');
  }
  login(data:any) {
    const body = { username: data.username, password: data.password };
    return this.http.post('http://localhost:4534/login', body);
  }
  signUp(data:any) {
    const body = { email: data.email, username: data.username, password: data.password };
    return this.http.post('http://localhost:4534/cad-user', body);
  }

  // Outros métodos para outras chamadas à API
}