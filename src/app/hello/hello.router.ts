import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth-guard.service';
import { HelloPage } from './hello.page';

const routes: Routes = [
  {
    path: 'hello',
    component: HelloPage,
    children:[
        {
            path:'home',
            loadChildren: ()=>import('../pages/home/home.module').then(m =>m.HomePageModule)
        },
        {
            path:'users',
            loadChildren: ()=>import('../pages/users/users.module').then(m =>m.UsersPageModule)
        },
        {
            path:'settings',
            loadChildren: ()=>import('../pages/settings/settings.module').then(m =>m.SettingsPageModule), canActivate:[AuthGuard]
        },
    ]
  }
  
];

    @NgModule({
        imports: [RouterModule.forChild(routes)],
      })
      export class HelloRouter {}
      