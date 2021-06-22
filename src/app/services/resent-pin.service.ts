import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResentPin } from '../models/resent-pin';

@Injectable({
  providedIn: 'root'
})
export class ResentPinService{
  url = 'https://resources.xtend.project.cox4.eu/api/cpm_mobile/v1/AppContacts/ResentPin';
  httpOptions = {
   

    headers:  new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'})
    
  };


  constructor(private httpClient: HttpClient) { }
  resentpin(_resentpin: ResentPin): Observable<any> {


    return this.httpClient.post(this.url, JSON.stringify(_resentpin), this.httpOptions)
      .pipe(

      )

  }
}