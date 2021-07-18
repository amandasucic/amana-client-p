import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { InviteUser } from 'src/app/models/invite-user';
import { InviteUserService } from 'src/app/services/invite-user.service';
import { UsersServiceService } from 'src/app/services/users-service.service';





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




  constructor(private router: Router,
    public formBuilder: FormBuilder,
    private inviteuserservice: InviteUserService,
    private userService: UsersServiceService) {

  }
  ngOnInit() {
    this.UserForm();
    this.Getlanguage();
  }
  cancel(){
    this.router.navigateByUrl('hello/home');
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

  Getlanguage() {
    this.inviteuserservice.getlanguage('1').subscribe(result => {
      console.log(result, "language")
     
      this.language = result;
      console.log(this.language);
       this.UserForm();
    });
  }
}


