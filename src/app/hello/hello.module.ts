import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { HelloPage } from './hello.page';
import { HelloRouter } from './hello.router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelloRouter
  ],
  declarations: [HelloPage]
})
export class HelloPageModule {}
