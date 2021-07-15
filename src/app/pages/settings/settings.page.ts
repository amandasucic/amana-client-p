
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Profil } from 'src/app/models/profil';
import { AuthService } from 'src/app/services/auth.service';
import { ProfilService } from 'src/app/services/profil.service';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public show_details: boolean = false;
  public show_user_statistic: boolean = false;
  public id: string;
  public profilForm: FormGroup;
 public profil: Profil
 public loggedIn: any;

  constructor(public formBuilder: FormBuilder, private Activatedroute: ActivatedRoute,
    private router: Router,
    private profilService: ProfilService, private authService: AuthService,public alertCtrl: AlertController) {
    this.profil = null;
    this.loggedIn=this.authService.isAuthenticated();
  }


  ngOnInit() {
    if(this.loggedIn = true){
      this.GetProfil()}
  }
  
  logout(){
    this.authService.logout();
    this.router.navigate(['login'])
    
  
}

  GetProfil() {
    this.profilService.getProfil("1").subscribe(result => {
      console.log(result, "profill")
      this.profil = result;
      this.ProfilForm();

    });
  }

  ProfilForm(){
    this.profilForm=this.formBuilder.group({
      firstname: [this.profil.firstName, Validators.required],
      lastname: [this.profil.lastName, Validators.required],
      middlename: [this.profil.middleName, Validators.required],
      email: [this.profil.email, Validators.required],
      username: [this.profil.userName, Validators.required],
      pictureUrl:[this.profil.pictureUrl, Validators.required],

      
    })
  }
  
}

