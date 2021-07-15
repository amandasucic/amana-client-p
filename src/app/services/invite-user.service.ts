import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InviteUser } from '../models/invite-user';

@Injectable({
  providedIn: 'root'
})
export class InviteUserService {
  url = 'https://resources.xtend.project.cox4.eu/api/cpm/v1/BrandAppUser/InviteUser';
  httpOptions = {
   

    headers:  new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'})
    
  };


  constructor(private httpClient: HttpClient) { }
  inviteuser(_inviteuser: InviteUser): Observable<any> {


    return this.httpClient.post(this.url, JSON.stringify(_inviteuser), this.httpOptions)
      .pipe(

      )

  }
}
