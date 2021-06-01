import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { RouterLinkDelegate } from "@ionic/angular";

import { AuthService } from "../services/auth.service";

 
@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  user = null;

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const user = this.authService.isAuthenticated();
    
    /*console.log(userRoles);*/
    if(!this.authService.isAuthenticated){
      this.router.navigate(['login']);
          return false;

        }

      
        if (this.authService.getRoles()!==null) {
          this.router.navigate(['error', 'not-found']);
          return false;
      }
      return true;
  }
        
          
        
        /*if (this.authService.isAuthenticated()){
          return true;
        }
      }
        //console.log('ahgshgs')
        
      }
    }*/


    

        /*const user =this.authService.userValue;
         if(user){
           if(route.data.roles && route.data.roles.indexOf(user.role)===-1){
             console.log('ahgshgs')
             this.router.navigate(['login']);
             return false;
           }
         }
         if (this.authService.isAuthenticated()) {
           console.log('hgsd')
           return true;
         }
         return false;
         
       }}*/
      
}
