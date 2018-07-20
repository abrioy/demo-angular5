import {Injectable} from '@angular/core';
import {User, Users} from "./user";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {Subject} from "rxjs/Subject";
import "rxjs/add/operator/delay";


@Injectable()
export class AuthService implements CanActivate {
  private currentUser$: Subject<User> = new ReplaySubject<User>(1);

  constructor() {
    let userId = localStorage.getItem("user");
    let user = this.loadUser(userId);
    if (user) {
      this.currentUser$.next(user);
    }
    else {
      this.logout();
    }
  }

  private loadUser(id: string): User {
    if (id == null) {
      id = "guest";
    }
    if (!id || !(id in Users.RIGHTS)) {
      return null;
    }

    let currentUser = new User();
    Object.assign(currentUser, Users.RIGHTS[id]);
    return currentUser;
  }

  public getCurrentUser(): Observable<User> {
    return this.currentUser$.asObservable();
  }

  public loginAs(userId: string): Promise<string> {
    return new Promise((resolve, reject) => {
      localStorage.setItem("user", userId);
      let user = this.loadUser(userId);
      if (user) {
        this.currentUser$.next(user);
        resolve(null);
      }
      else {
        reject("Nom d'utilisateur incorrect");
      }
    });
  }

  public logout(): Promise<string> {
    return this.loginAs(null);
  }

  public static isAuthorized(user: User, right: string): boolean {
    if (user && right in user.accessRights) {
      return user.accessRights[right];
    }
    return false;
  }

  private static isAuthorisedForRoute(user: User, url: string): boolean {
    if (user) {
      for (let regex of user.routeRights) {
        if (url.match(regex)) {
          return true;
        }
      }
    }
    return false;
  }

  public isCurrentAuthorisedForRoute(url: string): Observable<boolean> {
    return this.getCurrentUser().map(user => AuthService.isAuthorisedForRoute(user, url));
  }

  public isCurrentAuthorized(right: string): Observable<boolean> {
    return this.getCurrentUser().map(user => AuthService.isAuthorized(user, right));
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isCurrentAuthorisedForRoute(state.url);
  }
}
