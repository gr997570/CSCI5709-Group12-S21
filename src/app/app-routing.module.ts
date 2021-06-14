import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tutorial2Component } from './tutorial2/tutorial2.component';
import { Tutorial3Component } from './tutorial3/tutorial3.component';
import { ProfileComponent } from './tutorial3/profile/profile.component';
import { Tutorial4Component } from './tutorial4/tutorial4.component';
import { UsersComponent } from './tutorial4/users/users.component';
import { UserProfileComponent } from './tutorial4/user-profile/user-profile.component';

const routes: Routes = [
  {path: 'tutorial2', component: Tutorial2Component},
  {path: 'tutorial3', component: Tutorial3Component},
  {path: 'profile', component: ProfileComponent},
  {path: 'tutorial4', component: Tutorial4Component},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
