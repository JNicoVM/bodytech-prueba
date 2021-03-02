import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/auth"
import { map } from "rxjs/operators"
import { Router } from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class NologinGuard implements CanActivate {

  constructor(private Afauth: AngularFireAuth, public router: Router) {
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.Afauth.authState.pipe(map(auth => {

        if(auth === null || auth === undefined){
          return true
        }else{
          this.router.navigate(["/tabs"]);
          return false
        }
      }))
  }
  
}
