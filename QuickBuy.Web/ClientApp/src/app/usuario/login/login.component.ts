import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../model/usuario";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: "app-login",
  styleUrls: ["./login.component.css"],
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit{

  public usuario;
  public returnUrl: string;

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
  }
    ngOnInit(): void {
      this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
      this.usuario = new Usuario();

    }
  entrar() {
    if (this.usuario.email == "lipi@hotmail.com" && this.usuario.senha == "lipi") {
      sessionStorage.setItem("usuario-autenticado", "1");
      this.router.navigate([this.returnUrl]);
    }
  }
}
