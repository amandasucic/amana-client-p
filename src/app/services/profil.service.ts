import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profil } from '../models/profil';


@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  url ="https://resources.xtend.project.cox4.eu/api/aut/v1/Accounts/6/currentUser";
  
  constructor(private http: HttpClient) { }
  

  getProfil() {
    return this.http.get<Profil>(this.url );
  }

  
}
