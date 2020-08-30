import { Injectable } from "@angular/core";
import { Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class GuardaRotas implements CanActivate {

  constructor(private router: Router) {
    // router = new Router(); 

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    var autenticado = sessionStorage.getItem("usuario-autenticado");
    if (autenticado == "1") {
      return true;
    }
    this.router.navigate(['/entrar'], { queryParams: { returnUrl:state.url} })
      //se o usuario autenticado
      return false;
    }


}
