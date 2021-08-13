import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersServiceService } from 'src/app/services/users-service.service';
import { ProfilService } from 'src/app/services/profil.service';
import { Profil } from 'src/app/models/profil';


@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  public show_users_list: boolean = false;
  public users: User[];
  public user:  User [];
  usersServiceService: any;
  language: User[];
  public profil: Profil;
  brandId: string;
  
  
  constructor(private router: Router,
    private userService: UsersServiceService,private profilService: ProfilService) {
    this.users = [];
    this.user= [];
    
    
  }

  ngOnInit() {
    this.GetProfil()
    
    
    
  }
  GetProfil() {
    this.profilService.getProfil("1").subscribe(result => {
       this.profil=result;
      this.brandId = this.profil.companyId;
      this.GetUsers(this.brandId);
      });
  }
  invite() {
    this.router.navigate(['invite'])
  }

  details(userId: string) {
    
  }

  GetUsers(brandId:string) {
    this.userService.getUsers(brandId).subscribe(result => {
      console.log(result, "users")
     
      this.users = result;
      console.log(this.users);
    });
  }
  DeleteUser(id:string){
    this.userService.deleteUser(id).subscribe(result => {
      console.log(result, "users")
     console.log(this.users);
    });
  }
 
  
}