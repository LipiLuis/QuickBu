import { Injectable, inject, Inject, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { observable, Observable } from "rxjs";
import { Produto } from "../../modelo/produto";
@Injectable({
  providedIn: "root"
})

export class ProdutoServico implements OnInit{
  private _baseUrl: string;
  private produtos: Produto[];
    
  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this._baseUrl = baseUrl;
  }
    ngOnInit(): void {
      this.produtos = [];
    }

  get headers(): HttpHeaders {
    return  new HttpHeaders().set('content-type', 'application/json');
  }
  public cadastar(produto: Produto): Observable<Produto> {

    return this.http.post<Produto>(this._baseUrl + "api/produto/cadastar", JSON.stringify(produto), { headers: this.headers })
  }

  public salvar(produto: Produto): Observable<Produto> {

    return this.http.post<Produto>(this._baseUrl + "api/produto/salvar", JSON.stringify(produto), { headers: this.headers })
  }
  public deletar(produto: Produto): Observable<Produto> {
  
    return this.http.post<Produto>(this._baseUrl + "api/produto/deletar", JSON.stringify(produto), { headers: this.headers })
  }
  public obterTodosProdutos(): Observable<Produto[]> {

    return this.http.get<Produto[]>(this._baseUrl + "api/produto")
  }
  public obterProduto(): Observable<Produto> {
    return this.http.get<Produto>(this._baseUrl + "api/produto/obter")
  }
}
