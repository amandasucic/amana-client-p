import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';


import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage-angular' ;
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthGuard } from './services/auth-guard.service';
import { JwtIntercepter } from './helpers/jwt.interceptor';
import {IonicStorageModule} from '@ionic/storage-angular';
import { AuthService } from './services/auth.service';

import { ProfilService } from './services/profil.service';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(), 
     FormsModule,
     ReactiveFormsModule,
     IonicStorageModule,
     HttpClientModule,
     RouterModule.forRoot([]),
     AppRoutingModule,],
  providers: [AuthGuard, 
    AuthService, 
    ProfilService, 
    Storage,
    { provide: HTTP_INTERCEPTORS, useClass: JwtIntercepter, multi: true },
    ], 
  bootstrap: [AppComponent],
})
export class AppModule {}
