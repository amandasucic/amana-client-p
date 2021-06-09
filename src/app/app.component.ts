import { Component } from '@angular/core';
import { Router }   from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  storage: any;
  splashScreen: any;
  statusBar: any;
 
  constructor(
    public router: Router,
    private platform: Platform,
    private authService: AuthService,

    
  )  {
    
    this.initializeApp();
    
    
    }
  

  initializeApp(){
   this.platform.ready().then(()=>{
    this.router.navigateByUrl('splash');
    /*this.splashScreen.hide();
      this.authService.authenticationState.subscribe(state => {
        if (state) {
          this.router.navigate(['hello/home']);
        } else {
          this.router.navigate(['login']);
        }
      });

    });*/
  });
  }
}