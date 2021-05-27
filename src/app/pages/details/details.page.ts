import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersServiceService } from 'src/app/services/users-service.service';



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

  constructor(public formBuilder: FormBuilder, private Activatedroute: ActivatedRoute,
    private router: Router,
    private userService: UsersServiceService) {
    this.user = null;
    this.id = this.Activatedroute.snapshot.paramMap.get('id');

  }


  ngOnInit() {
    this.GetUser(this.id)
    
  }

  GetUser(id: string) {
    this.userService.getUser(id).subscribe((result) => {
      //console.log(result)
      this.user = result;
      console.log(this.user);
      this.UserForm();

    });
  }

  UserForm(){
    this.detailsForm=this.formBuilder.group({
      //"firstname": new FormControl(this.user.firstName),
      firstname: [this.user.firstName, Validators.required],
      email: [this.user.lastName, Validators.required],
      phone: [this.user.phone, Validators.required],
      mobile: [this.user.mobile, Validators.required],
      
    })
  }
}

