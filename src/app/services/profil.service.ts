import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profil } from '../models/profil';


@Injectable()
export class ProfilService {
  url ="https://resources.xtend.project.cox4.eu/api/aut/v1/Accounts/";
  
  constructor(private http: HttpClient) { }

  getProfil(id: string) {
    return this.http.get<Profil>(this.url + id + "/currentUser" );
  }

  
}
