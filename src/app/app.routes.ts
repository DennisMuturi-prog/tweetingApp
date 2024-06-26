import { Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { authenticatedGuard } from './authenticated-guard.guard';

export const routes: Routes = [
  { path: 'signUp', component: SignUpComponent, title: 'sign up' },
  { path: 'login', component: SignInComponent, title: 'log in' },
  { path: 'home', component: HomeComponent, title: 'home', canActivate:[authenticatedGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
