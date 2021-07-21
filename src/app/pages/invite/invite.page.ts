import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { InviteUser } from 'src/app/models/invite-user';
import { InviteUserService } from 'src/app/services/invite-user.service';
import { UsersServiceService } from 'src/app/services/users-service.service';
import { ProfilService } from 'src/app/services/profil.service';
import { Profil } from 'src/app/models/profil';





@Component({
  selector: 'app-invite',
  templateUrl: './invite.page.html',
  styleUrls: ['./invite.page.scss'],
})
export class InvitePage implements OnInit {
  inviteForm: FormGroup;
  invitemodel: InviteUser;
  zone: any;
  language: InviteUser[];
  brandId: string;
  public profil: Profil;




  constructor(private router: Router,
    public formBuilder: FormBuilder,
    private inviteuserservice: InviteUserService,
    private userService: UsersServiceService,
    private profilService: ProfilService) {

  }
  ngOnInit() {
    this.UserForm();
    this.GetProfil();
  }
  cancel(){
    this.router.navigateByUrl('hello/home');
  }
  GetProfil() {
    this.profilService.getProfil("1").subscribe(result => {
       this.profil=result;
      this.brandId = this.profil.companyId;
      this.Getlanguage(this.brandId);
      });
  }

  UserForm() {
    this.inviteForm = this.formBuilder.group({
    
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      brandId: [1, Validators.required],
      languageId: [1, Validators.required],

    })
  }
  onsend(inviteForm: FormGroup) {
    console.log(inviteForm.value)
    this.userService.inviteuser(inviteForm.value)
      .subscribe((response) => {
        this.invitemodel = response
      });
  }

  Getlanguage(brandId:string) {
    this.inviteuserservice.getlanguage(brandId).subscribe(result => {
      console.log(result, "language")
     
      this.language = result;
       this.UserForm();
    });
  }
}


