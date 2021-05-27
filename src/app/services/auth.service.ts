import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, from, of, throwError } from "rxjs";
import { catchError, map, switchMap, take, tap } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Storage } from '@ionic/storage';
import { AlertController, Platform } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";



const TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isAuthenticatedgetToken(): boolean {
    throw new Error("Method not implemented.");
  }
  url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false);
  userValue: any;
  getauthService: any;
  //private _storage: Storage | null = null;
  constructor(private http: HttpClient, private helper: JwtHelperService, 
    private storage: Storage, private plt: Platform, private alertController: AlertController

  ) {
   
    storage.create()

    /* this.plt.ready().then(()=>{
       this.checkToken();
     });
     */
  }


  /*checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);
 
        if (!isExpired) {
          this.user = decoded;
          this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }*/
  /*login(credentials) {
    return this.http.post(this.url + 'api/aut/v1/Auth/login', credentials)
      .pipe(map(res => {
        console.log(res);

        this._storage.set('currentUserData', { });
        console.log(this.storage.get('currentUserData'));
        //this.storage.set(TOKEN_KEY, res['token']);
        //this.user=this.helper.decodeToken(res['token']);
        this.authenticationState.next(true);
      }),
      );
  }*/

  
  // Sign in a user and store access and refres token
  login(credentials) {
    return this.http.post(this.url + 'api/aut/v1/Auth/login',credentials).pipe(
      map((res: {accessToken, refreshToken}) => {
        this.storage.set("token",res.accessToken.token);
        this.storage.set("refreshToken", res.refreshToken);
        this.authenticationState.next(true);
        return true;
      })
    )
  }

  getToken(){
    var token = this.storage.get("token");
    return token;
  }
  isAuthenticated() {
    return this.authenticationState.value;
  }


}
