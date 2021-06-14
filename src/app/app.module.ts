import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tutorial2Component } from './tutorial2/tutorial2.component';
import { Tutorial3Component } from './tutorial3/tutorial3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './tutorial3/profile/profile.component';
import { Tutorial4Component } from './tutorial4/tutorial4.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './tutorial4/users/users.component';
import { MatCardModule } from '@angular/material/card';
import { UserProfileComponent } from './tutorial4/user-profile/user-profile.component';
import { SearchuserPipe } from './tutorial4/searchuser.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Tutorial2Component,
    Tutorial3Component,
    ProfileComponent,
    Tutorial4Component,
    UsersComponent,
    UserProfileComponent,
    SearchuserPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
