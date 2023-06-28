import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserLogged } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  constructor(private router: Router, private userService: UserService) {}
  logo = "../../../assets/logo.png";
  username!: string;
  password!: string;
  validCredentials: boolean = true;
  user!: User;

  handleLogin(username: string, password: string) {
    console.log(username,password)
    const userCredentials = { username: username, password: password };

    this.userService.login(userCredentials).subscribe(
      (data:UserLogged) => {
        console.log(data)
        localStorage.setItem('user', JSON.stringify(data))
        localStorage.setItem('carrinho', '');
        console.log(localStorage)
        this.router.navigate(["/home"]);
        this.validCredentials = true;
      },
      (error) => {
        console.error(error);
        this.validCredentials = false;
      }
    );
  }

  goToSignUp() {
    this.router.navigate(["/signup"]);
  }
}

export class User {
  id?: number;
  email?: String;
  username?: String;
}
