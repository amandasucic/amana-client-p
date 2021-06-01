import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, from, of, throwError } from "rxjs";
import { catchError, map, switchMap, take, tap } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Storage } from '@ionic/storage';
import { AlertController, Platform } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import jwt_decode from 'jwt-decode';




@Injectable({
  providedIn: "root",
})
export class AuthService {
  username: string;
  password: string;

  isAuthenticatedgetToken(): boolean {
    throw new Error("Method not implemented.");
  }
  url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false);
  userValue: any;
  getauthService: any;
  constructor(
    private http: HttpClient,
    private storage: Storage,
  ) {
    storage.create()
  }

  // Sign in a user and store access and refres token
  login(credentials) {
    return this.http.post(this.url + 'api/aut/v1/Auth/login', credentials).pipe(
      map((res: { accessToken, refreshToken }) => {
        console.log(res.accessToken.token)
        this.storage.set("token", res.accessToken.token);
        console.log(res.accessToken.token)
        this.storage.set("refreshToken", res.refreshToken);
        this.storage.set("role", res.accessToken.role);
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
    this.storage.get("token").then(token => {
      if (token) {
        return token;
      } else {
        this.storage.remove("token");
      }
    })
  }

 getRoles() {
    this.storage.get("role").then(roles => {
      if (roles) {
        return roles;
      }
    })
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  logout() {
    this.storage.remove("token").then(() => {
      this.authenticationState.next(false);
    });
  }
}