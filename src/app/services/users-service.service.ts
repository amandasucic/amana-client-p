import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { InviteUser } from '../models/invite-user';
import { environment } from 'src/environments/environment';
import {ResentPin} from '../models/resent-pin';
import { Language } from '../models/Language';

@Injectable()
export class UsersServiceService {

  url = 'https://resources.xtend.project.cox4.eu/api/cpm/v1/BrandAppUser';
  url1 = 'https://resources.xtend.project.cox4.eu/api/cpm/v1/BrandAppUser/appContacts';
  url2='https://resources.xtend.project.cox4.eu/api/cpm/v1/Language/';
  

  
 //url2="api/cpm/v1/AppContacts/ResentPin";
  constructor(private http: HttpClient) { }
  getUsers(brandId:string) {
    return this.http.get<User[]>(this.url + '/' + brandId + '/appContacts' );
  }

  getUser(id: string) {
    return this.http.get<User>(this.url + "/" + id);
  }

  inviteuser(_inviteuser: InviteUser) {
    return this.http.post<InviteUser>(this.url+"/InviteUser", _inviteuser)
    .pipe()
  }
  resentpin(userid: number) {
    let body={userid}
    return this.http.post(this.url+ '/' + userid + "/ResentPin", body)
    .pipe()
  }
  getlanguage(id:number) {
    return this.http.get<Language>(this.url2 + id);
  }

  deleteUser(id: string) {
    return this.http.delete<User>(this.url + "/" + id);
  }
   

}