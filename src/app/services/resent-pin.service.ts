import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResentPin } from '../models/resent-pin';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ResentPinService{
  url = 'https://resources.xtend.project.cox4.eu/api/cpm/v1/BrandAppUser';
  httpOptions = {
   

    headers:  new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'})
    
  };


  constructor(private httpClient: HttpClient) { }
  resentpin(userId: number) {
  let body={userId}

    return this.httpClient.put(this.url+ '/' + userId + "/ResentPin", body, this.httpOptions)

  }
}