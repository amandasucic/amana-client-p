import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { catchError, filter, finalize, switchMap, take } from "rxjs/operators";
import { AuthService } from "../services/auth.service";


@Injectable()
export class JwtIntercepter implements HttpInterceptor {
    private authService: AuthService;
    isRefreshToken: any;
    tokenSubject: any;
    storage: any;
    jwtHelper: any;
   
    
    constructor(private inj: Injector) {
        setTimeout(() => {
            this.authService = this.inj.get(AuthService);
        })
    }
    
   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     let authenticated = this.authService.isAuthenticated();
     var token=this.authService.getToken();
        var token  = this.authService.getToken();
        console.log("intercep", token)
        if (authenticated) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }console.log('hshs')
        return next.handle(request)
    }
    

private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
  if (!this.isRefreshToken) {
   this.isRefreshToken = true;
    this.refreshTokenSubject.next(null);

    return this.authService.getrefreshToken().pipe(
      switchMap((token: any) => {
        this.isRefreshToken = false;
        this.refreshTokenSubject.next(token.jwt);
        return next.handle(this.addToken(request, token.jwt));
      }));

  } else {
    return this.refreshTokenSubject.pipe(
      filter(token => token != null),
      take(1),
      switchMap(jwt => {
        return next.handle(this.addToken(request, jwt));
      }));
  }
}addToken(request: HttpRequest<any>, jwt: any): HttpRequest<any> {
        throw new Error("Method not implemented.");
    }}
