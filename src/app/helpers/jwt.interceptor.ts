import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { BehaviorSubject, combineLatest, Observable, throwError } from "rxjs";
import { catchError, filter, finalize, switchMap, take } from "rxjs/operators";
import { AuthService } from "../services/auth.service";


@Injectable()
export class JwtIntercepter implements HttpInterceptor {
  private authService: AuthService;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  isRefreshToken: boolean = false;


  constructor(private inj: Injector) {
    setTimeout(() => {
      this.authService = this.inj.get(AuthService);
    })
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   /*console.log("interc")
    let authenticated = this.authService.isAuthenticated();
    var token = this.authService.getToken();
    if (authenticated) {
      request = this.addToken(request, token);
    }*/
    if(localStorage.getItem('token') != undefined){
      request= this.addToken(request, localStorage.getItem('token'));
    }
    return next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return this.handle401Error(request, next);
      } else {
        return throwError(error);
      }
    }));
  }

  private addToken(request: HttpRequest<any>, token: string) {
    console.log("add token")
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }


  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshToken) {
      this.isRefreshToken = true;
      this.refreshTokenSubject.next(null);
      console.log('hdsf');

      return this.authService.setRefreshToken().pipe(
        switchMap((token) => {
          this.isRefreshToken = false;
          this.refreshTokenSubject.next(true);
          return next.handle(this.addToken(request, token));
        }));

    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt));
        }));
    }
  }
}
