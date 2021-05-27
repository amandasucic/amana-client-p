import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { IndexPage } from './index.page';
import { IndexRouter } from './index.router';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexRouter,
    RouterModule
  ],
  declarations: [IndexPage]
})
export class IndexPageModule {}
