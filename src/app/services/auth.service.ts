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

  authenticationState = new BehaviorSubject(false);
  authService: any;
  public token: string;
    currentAccessToken: any;
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
    return this.http.post(environment.url + 'api/aut/v1/Auth/login', credentials).pipe(
      map((res: { accessToken, refreshToken }) => {
        this.storage.set("token", res.accessToken.token);
        localStorage.setItem("token", res.accessToken.token);
        this.storage.set("refreshToken", res.refreshToken);
        localStorage.setItem("refreshToken",res.refreshToken);
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

  getrefreshToken(){

    return  localStorage.getItem('refreshToken');
  }

  isAuthenticated() {
    var value = this.authenticationState.value;
    if (localStorage.getItem('token')!=undefined){
      var x=true;
    }
    return x;
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    this.authenticationState.next(false);
    
  }
  setRefreshToken(){
    return this.http.post(environment.url + 'api/aut/v1/Auth/refreshtoken', {'accessToken': localStorage.getItem('token'),'refreshToken': localStorage.getItem('refreshToken')}).pipe(
      map((res: { accessToken, refreshToken }) => {
        this.storage.set("token", res.accessToken.token);
        localStorage.setItem("token", res.accessToken.token);
        this.storage.set("refreshToken", res.refreshToken);
        localStorage.setItem("refreshToken",res.refreshToken);
        /*this.storage.set("role", res.accessToken.role);*/
        this.authenticationState.next(true);
        return localStorage.getItem('token');
      }),
    )
    }
}