import { Component } from "@angular/core";
import { Usuario } from "../../model/usuario";


@Component({
  selector: "app-login",
  styleUrls: ["./login.component.css"],
  templateUrl: "./login.component.html"
})
export class LoginComponent {

  public usuario;
  public usuarioAutenticado: boolean;

  public usuarios = ["usuario1", "usuario2", "usuario3", "usuario4", "usuario5"]

  constructor() {
    this.usuario = new Usuario();
  }
  entrar() {
    if (this.usuario.email == "lipi@hotmail.com" && this.usuario.senha == "lipi") {
      this.usuarioAutenticado = true;
    }
  }
}
