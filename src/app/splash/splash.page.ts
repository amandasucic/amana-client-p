import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  

  constructor(public router:Router, private authService: AuthService) {
    setTimeout(() =>{
      console.log(this.authService.isAuthenticated(),'gfgf')
      if (this.authService.isAuthenticated()) {
        this.router.navigateByUrl('hello/home');
        console.log('sese')

      }else{
  
     console.log('bebeb') 
     
     this.router.navigateByUrl('login');
    }},3000);


     
  }
     

  ngOnInit() {
  }

}
