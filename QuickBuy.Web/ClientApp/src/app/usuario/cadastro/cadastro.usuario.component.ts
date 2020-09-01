import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../model/usuario";
import { UsuarioSevico } from "../../servicos/usuario/usuario.servico";

@Component({

  selector: "cadastro-usuario",
  templateUrl: "./cadastro.usuario.component.html",
  styleUrls: ["./cadastro.usuario.component.css"]

})

export class CadastroUsuarioComponent implements OnInit{

  public usuario: Usuario;

  constructor(private usuarioServico: UsuarioSevico) {

  }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  public cadastrar() {
    alert(this.usuario.nome + this.usuario.sobreNome + this.usuario.email + this.usuario.senha)
    //this.usuarioServico.cadastrarUsuario(this.usuario)
    //  .subscribe(
    //    usuarioJson => { },
    //    err => {}
    //  );
  }
}
