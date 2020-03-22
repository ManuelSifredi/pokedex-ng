import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { HomeComponent } from './components/home/home.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/pokedex',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pokedex',
    component: PokedexComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'my-pokedex',
    component: PokedexComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
