import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { InviteUser } from '../models/invite-user';
import { environment } from 'src/environments/environment';
import {ResentPin} from '../models/resent-pin';

@Injectable()
export class UsersServiceService {

  url = 'https://resources.xtend.project.cox4.eu/api/cpm/v1/BrandAppUser';
  url1 = 'https://resources.xtend.project.cox4.eu/api/cpm/v1/BrandAppUser/1/appContacts';
  
 //url2="api/cpm/v1/AppContacts/ResentPin";
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get<User[]>(this.url);
  }

  getUser(id: string) {
    return this.http.get<User>(this.url + "/" + id);
  }

  inviteuser(_inviteuser: InviteUser) {
    return this.http.post<InviteUser>(this.url+"/InviteUser", _inviteuser)
    .pipe()
  }
  resentpin(userid: number, brandId:number) {
    let body={userid,brandId}
    return this.http.post(this.url1+"/ResentPin", body)
    .pipe()
  }

}