import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
  user!:any;
  email!: string;
  username!: string;
  password!: string;
  password2!: string;
  first_name!: string;
  last_name!: string;
  cpf!: string;
  validCredentials: boolean = true;
  constructor(private userService:UserService, private router:Router){
    if(!localStorage.getItem('user')){
      this.router.navigate([''])
    
    }
    this.user = JSON.parse(localStorage.getItem("user")!)[0];
    this.email=this.user.email
    this.username=this.user.username
    this.password=this.user.password
    this.first_name=this.user.first_name
    this.last_name=this.user.last_name
    this.cpf=this.user.cpf


  }
  logOut(){
    console.log('asdf')
    localStorage.setItem('user', '');
    this.router.navigate([''])
  }
  handleClick(
    // email: string,
    // username: string,
    // password: string,
    // first_name: string,
    // last_name: string,
    // cpf: string

  ) {
    const userCredentials = {

      username: this.username,
      password: this.password,
      first_name: this.first_name,
      last_name: this.last_name,

    };
   
console.log('into')
    this.userService.updateUser(userCredentials).subscribe(
      (data) => {
        console.log(data);
        console.log("deu bom ");
        // this.router.navigate(["/home"]);
        this.validCredentials = true;
      },
      (error) => {
        console.error(error);
        this.validCredentials = false;
      }
    );
  }
}
