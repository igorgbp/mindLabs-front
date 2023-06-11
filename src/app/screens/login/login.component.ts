import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  constructor(private router: Router, private userService:UserService) {}
  logo = "../../../assets/logo.png";
  username!:string;
  password!:string;
  validCredentials:boolean = true;
  handleClick(username: string, password: string) {
    const userCredentials = { username: username, password: password };
  
    this.userService.login(userCredentials).subscribe(
      (data) => {
        console.log(data);
        console.log('deu bom ')
        this.router.navigate(['/home']);
        this.validCredentials=true;

      },
      (error) => {
        console.error(error);
        this.validCredentials=false;
      }
    );
  
  }

  goToSignUp(){
    this.router.navigate(['/signup'])
  }

   

  }

