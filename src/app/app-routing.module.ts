import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Login } from './models/login';
import { HomePage } from './pages/home/home.page';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./hello/hello.module').then( m => m.HelloPageModule)
   
    
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  
  {
    path: 'invite',
    loadChildren: () => import('./pages/invite/invite.module').then( m => m.InvitePageModule)
  },
  
  
  {
    path: 'details/:id',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },

 /* {
    path: 'home',
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule)
      //canActivate: [AuthGuard] // Just add this line to your home page route
  },*/
  
 
 
  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
