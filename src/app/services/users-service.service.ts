import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { InviteUser } from '../models/invite-user';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  url = "https://resources.xtend.project.cox4.eu/api/cpm_mobile/v1/AppContacts";
  url1 = "https://resources.xtend.project.cox4.eu/api/cpm_mobile/v1/AppContacts/1";
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
}