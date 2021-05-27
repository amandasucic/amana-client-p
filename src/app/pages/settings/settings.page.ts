import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public show_profil: boolean = false;
  public show_help:  boolean = false;

  constructor(private router: Router) {
    
  }
  ngOnInit() {
  }
  logout(){
    this.router.navigate(['login'])

  }
}