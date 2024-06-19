import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from  './home/home.component'; // Import the HomeC
import { LoginComponent } from './components/pages/login/login.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/pages/login/login.component').then(m => m.LoginComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
