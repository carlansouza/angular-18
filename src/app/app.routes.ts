import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from  './home/home.component'; // Import the HomeC
import { LoginComponent } from './components/pages/login/login.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent // Assign the HomeComponent as the component value
  },
  {
    path: 'login',
    component: LoginComponent } // Assign the LoginComponent as the component value
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
