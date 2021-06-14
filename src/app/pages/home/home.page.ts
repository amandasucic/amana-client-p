import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  constructor(private router: Router,
    private authService: AuthService, 
    ) {}
    
 
  ngOnInit() {
    this.authService.isAuthenticated()
   /*this.authService.getRoles()*/
  }

  async invite(){
    this.router.navigate(['invite'])
    }
  }

  

