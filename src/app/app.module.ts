import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage' 
import { JwtInterceptor, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthGuard } from './services/auth-guard.service';

export function jwtOptionsFactory(storage) {
  return {
    tokenGetter: () => {
      //return storage.get('access_token');
      return true;
    },
    whitelistedDomains: ['localhost:8100']
  }
}


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule,ReactiveFormsModule,HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage],
      }
    })],
  providers: [AuthGuard, Storage,{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    ], 
  bootstrap: [AppComponent],
})
export class AppModule {}
