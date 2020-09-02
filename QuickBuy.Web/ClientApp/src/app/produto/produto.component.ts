import { Component, OnInit } from "@angular/core";
import { Produto } from "../modelo/produto";
import { ProdutoServico } from "../servicos/produto/produto.servico";


@Component({
  selector: "app-Produto",
  templateUrl: "./produto.component.html",
  styleUrls: ["/produto.component.css"]
})
export class ProdutoComponent implements OnInit {
  public produto: Produto;

  constructor(private produtoServico: ProdutoServico ) {

  }
    ngOnInit(): void {
      this.produto = new Produto();
  }

  public cadastar() {
    //this.produto
    //this.produtoServico.cadastar(this.produto)
    //  .subscribe(
    //    produtoJson => {
    //      console.log(produtoJson)
    //    },
    //    err =>{
    //      console.log(err.error)
    //  }
    //  )
  }
}
