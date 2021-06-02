import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, from, of, throwError } from "rxjs";
import { catchError, map, switchMap, take, tap } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AlertController, Platform } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import jwt_decode from 'jwt-decode';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: "root",
})
export class AuthService {

  isAuthenticatedgetToken(): boolean {
    throw new Error("Method not implemented.");
  }

  url = environment.url;
  authenticationState = new BehaviorSubject(false);
  constructor(
    private http: HttpClient,
    private storage: Storage
  ) {
    storage.create();
  }

  // Sign in a user and store access and refres token
  login(credentials) {
    return this.http.post(this.url + 'api/aut/v1/Auth/login', credentials).pipe(
      map((res: { accessToken, refreshToken }) => {
        localStorage.setItem("localToken", res.accessToken.token);
        /*this.storage.set("role", res.accessToken.role);*/
        this.authenticationState.next(true);
        return true;
      }),
      catchError(e => {
        console.log("Error")
        throw new Error(e);
      })
    )
  }


  getToken() {
    var token = localStorage.getItem("localToken");
    //this.storage.get("token").then(token => {
      if (token) {
        return token;
      } else {
        localStorage.removeItem("localToken");
      }
    
  }

  /* getRoles() {
      this.storage.get("role").then(roles => {
        if (roles) {
          return roles;
        }
      })
    }*/

  isAuthenticated() {
    var value = this.authenticationState.value;
    return value && localStorage.getItem("localToken");
  }

  logout() {
    localStorage.removeItem("localToken");

    this.authenticationState.next(false);

  }
}