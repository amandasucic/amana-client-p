import { Injectable } from "@angular/core";
import { BehaviorSubject, } from "rxjs";
import { catchError, map, } from "rxjs/operators";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: "root",
})
export class AuthService {



  url = environment.url;
  authenticationState = new BehaviorSubject(false);
  authService: any;
  public token: string;
  constructor(
    private http: HttpClient,
    private storage: Storage
  ) {
    this.storage.create();
  }

  // Sign in a user and store access and refres token
  login(credentials) {
    /*let headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token});*/
    /* let options = new RequestOptions({ headers: headers });*/
    return this.http.post(this.url + 'api/aut/v1/Auth/login', credentials).pipe(
      map((res: { accessToken, refreshToken }) => {
        this.storage.set("token", res.accessToken.token);
        localStorage.setItem("token", res.accessToken.token);
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
    localStorage.getItem('token');
    this.storage.get("token").then((result) => {
      this.token = result;
    })
    //this.storage.get("token").then(token => {

    return  localStorage.getItem('token');

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
    return value &&  localStorage.getItem('token');
  }

  logout() {
    this.storage.remove("token");

    this.authenticationState.next(false);

  }
}