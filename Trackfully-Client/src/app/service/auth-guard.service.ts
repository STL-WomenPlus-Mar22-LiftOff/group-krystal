import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AutheticationService } from './authentication/authetication.service';

@Injectable()
export class AuthGuardService implements CanActivate{
  constructor(private autheticationService: AutheticationService, private router: Router){

  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.autheticationService.isUserLoggedIn()){
      return true;
    } else{
      this.router.navigate([""]);
      return false;
    }
  }
}