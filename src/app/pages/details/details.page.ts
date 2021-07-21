
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UsersServiceService } from 'src/app/services/users-service.service';
import { Language } from 'src/app/models/Language';
import{ResentPinService} from 'src/app/services/resent-pin.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public show_details: boolean = false;
  public show_user_statistic: boolean = false;
  public user: User;
  usersServiceService: any;
  public id: string;
  public detailsForm: FormGroup;
  //resentmodel: import("c:/Users/amand/Desktop/amanda-client-p-main/amanda-client-p-main/src/app/models/resent-pin").ResentPin;
  language: Language;
  constructor(public formBuilder: FormBuilder, private Activatedroute: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private userService: UsersServiceService, private resentpinService: ResentPinService) {
    this.user = null;
    this.id = this.Activatedroute.snapshot.paramMap.get('id');
    

  }


  ngOnInit() {
    this.GetUser(this.id)
    
    
    /*var i = this.auth.getRoles();*/
   /*/ console.log(i)*/
  }

  GetUser(id: string) {
    this.userService.getUser(id).subscribe((result) => {
      //console.log(result)
      this.user = result;
      console.log(this.user);
      this.userService.getlanguage(this.user.languageId).subscribe(result => {
      this.language = result;
      this.user.languageName=this.language.name
      console.log(this.language);
      this.detailsForm.controls['languageName'].setValue(this.language.name);
       });
      /* this.Getlanguage(this.user.languageId);*/
       console.log(this.user.languageName);
      this.UserForm();
     

    });
  }

  UserForm(){
    this.detailsForm=this.formBuilder.group({  
      firstname: [this.user.firstName, Validators.required],
      lastname: [this.user.lastName, Validators.required],
      email: [this.user.email, Validators.required],
      appContactStatusName: [this.user.appContactStatusName, Validators.required],
      role: [this.user.role, Validators.required],
      phone: [this.user.phone, Validators.required],
      mobile: [this.user.mobile, Validators.required],
      pin: [this.user.pin, Validators.required],
      languageName:[this.user.languageName, Validators.required],
      
    })
  }

  onclick() {
    this.resentpinService.resentpin(this.user.id)
      .subscribe((response) => {
        console.log(response, 'succes')
      });
  }
  Getlanguage(languageId:number) {
    this.userService.getlanguage(languageId).subscribe(result => {
      this.language = result;
      this.user.languageName=this.language.name
       });
}
}
