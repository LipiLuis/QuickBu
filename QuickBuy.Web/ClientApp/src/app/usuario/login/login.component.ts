import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../model/usuario";
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioSevico } from "../../servicos/usuario/usuario.servico";
import { error } from "protractor";


@Component({
  selector: "app-login",
  styleUrls: ["./login.component.css"],
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit{

  public usuario;
  public returnUrl: string;
  public mensagem: string;
  public ativar_spiner: boolean;

  constructor(private router: Router,
              private activatedRouter: ActivatedRoute,
              private usuarioServicos: UsuarioSevico) {
  }
    ngOnInit(): void {
      this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
      this.usuario = new Usuario();

    }
  entrar() {
    this.ativar_spiner = true;
    this.usuarioServicos.verificarUsuario(this.usuario)
      .subscribe(
        usuario_json => {
          //essa linha  sera executada no caso de retorno SEM ERROS
          this.usuarioServicos.usuario = usuario_json;
          if (this.returnUrl == null) {
            this.router.navigate(['/']);
          }
          else {
            this.router.navigate([this.returnUrl])

          }

        },
        err => {
          console.log(err.error);
          this.mensagem = err.error;
          this.ativar_spiner = false;
        }

    );

  }
}
