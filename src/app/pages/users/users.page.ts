import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersServiceService } from 'src/app/services/users-service.service';


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
  
  constructor(private router: Router,
    private userService: UsersServiceService) {
    this.users = [];
    this.user= [];
    
  }

  ngOnInit() {
    this.GetUsers();
    //this.users=this.usersServiceService.getUsers();
    
  }
  invite() {
    this.router.navigate(['invite'])
  }

  details(userId: string) {
    //this.router.navigate(['details/', userId])
  }

  GetUsers() {
    this.userService.getUsers().subscribe(result => {
      console.log(result, "users")
      //console.log(result)
      this.users = result;
      console.log(this.users);
    });
  }
 
}