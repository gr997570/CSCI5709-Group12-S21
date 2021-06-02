import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tutorial2Component } from './tutorial2/tutorial2.component';
import { Tutorial3Component } from './tutorial3/tutorial3.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'tutorial2', component: Tutorial2Component},
  {path: 'tutorial3', component: Tutorial3Component},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
