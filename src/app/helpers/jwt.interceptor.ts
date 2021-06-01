import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";


@Injectable()
export class JwtIntercepter implements HttpInterceptor{
    
 constructor(private authService: AuthService) {}

 intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
     let token = this.authService.getToken();
     console.log("intercep", token)
     if(true) {
         request=request.clone({
             setHeaders: {
                 Authorization: 'Bearer ${token}'
             }
         });
     }
     return next.handle(request)
 }
}