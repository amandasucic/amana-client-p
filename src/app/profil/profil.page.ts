import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersServiceService } from 'src/app/services/users-service.service';
import { Profil } from '../models/profil';
import { ProfilService } from '../services/profil.service';



@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  //public show_details: boolean = false;
  //public show_user_statistic: boolean = false;
  //public user: User;
  //usersServiceService: any;
 // public id: string;
  //public detailsForm: FormGroup;
  
  public show_profil: boolean = false;
  public show_profil_statistic: boolean = false;
  profil: Profil;
  profilForm: FormGroup;
 

  constructor(public formBuilder: FormBuilder, private Activatedroute: ActivatedRoute,
    private router: Router,
    private profilService: ProfilService) {
   
    

  }


  ngOnInit() {
    this.GetProfil()
    
  }

  GetProfil() {
    this.profilService.getProfil("1").subscribe((result) => {
      //console.log(result)
      this.profil = result;
      console.log(this.profil);
      this.ProfilForm();

    });
  }

  ProfilForm(){
    this.profilForm=this.formBuilder.group({
      //"firstname": new FormControl(this.user.firstName),
      firstname: [this.profil.firstName, Validators.required],
      lastname: [this.profil.lastName, Validators.required],
      middlename: [this.profil.middleName, Validators.required],
      email: [this.profil.email, Validators.required],
      username: [this.profil.userName, Validators.required],

      
    })
  }
}

