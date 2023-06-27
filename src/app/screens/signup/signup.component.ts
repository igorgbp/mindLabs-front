import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent {
  constructor(private router: Router, private userService: UserService) {}
  logo = "../../../assets/logo.png";
  email!: string;
  username!: string;
  password!: string;
  password2!: string;
  first_name!: string;
  last_name!: string;
  cpf!: string;
  validCredentials: boolean = true;

  handleClick(
    email: string,
    username: string,
    password: string,
    first_name: string,
    last_name: string,
    cpf: string
  ) {
    const userCredentials = {
      email: email,
      username: username,
      password: password,
      first_name,
      last_name,
      cpf,
    };
    if (
      email == "" ||
      username == "" ||
      password == "" ||
      first_name == "" ||
      last_name == "" ||
      password != this.password2
    )
      this.validCredentials = false;
    this.userService.signUp(userCredentials).subscribe(
      (data) => {
        console.log(data);
        console.log("deu bom ");
        this.router.navigate(["/home"]);
        this.validCredentials = true;
      },
      (error) => {
        console.error(error);
        this.validCredentials = false;
      }
    );
  }

  goToLogin() {
    this.router.navigate(["/"]);
  }

  emailControl = new FormControl("", [Validators.required]);
  passwordControl = new FormControl("", [Validators.required]);
  getErrorMessage() {
    if (this.emailControl.hasError("required")) {
      return "Digite seu email ou username";
    }

    return this.emailControl.hasError("email") ? "Email inválido" : "";
  }
  getPasswordErrorMessage() {
    if (this.passwordControl.hasError("required")) {
      return "Digite sua senha";
    }
    if (this.validCredentials == false) return "açlskdfj";

    return this.passwordControl.hasError("senha") ? "Senha invalida" : "";
  }
}
