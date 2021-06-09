import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";


@Injectable()
export class JwtIntercepter implements HttpInterceptor {
    private authService: AuthService;

    constructor(private inj: Injector) {
        setTimeout(() => {
            this.authService = this.inj.get(AuthService);
        })
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authenticated = this.authService.isAuthenticated();
        var token = this.authService.getToken();
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
}