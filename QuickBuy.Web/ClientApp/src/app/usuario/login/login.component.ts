import { Component } from "@angular/core";


@Component({
  selector: "app-login",
  styleUrls: ["./login.component.css"],
  templateUrl: "./login.component.html"
})
export class LoginComponent {

  entrar() {
    alert("Entrou no sistema!");
  }

  on_keypress() {
    alert("foi digitado no campo do email")
  }
}
