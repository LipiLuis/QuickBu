import { Component } from "@angular/core";


@Component({
  selector: "app-Produto",
  templateUrl: "./produto.component.html"
})
export class ProdutoComponent {
  public nome: string;
  public liberadoParaVenda: boolean;

  public obterNome() {
    return "motorola";
  }
}
