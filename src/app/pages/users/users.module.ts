import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersPageRoutingModule } from './users-routing.module';

import { UsersPage } from './users.page';
import { UsersServiceService } from 'src/app/services/users-service.service';
import{ResentPinService} from 'src/app/services/resent-pin.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersPageRoutingModule
  
  ],
  declarations: [UsersPage],
  providers: [
    UsersServiceService,
     ResentPinService
  ]
})
export class UsersPageModule {}
