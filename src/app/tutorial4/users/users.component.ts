import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/tutorial4/userservice.service';
import { UserProfile } from '../../tutorial4/users/user-profile';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userProfiles: UserProfile[] = [];
  searchUser: UserProfile[] = [];
  user: any;
  searchForm: any;

  constructor(private userService: UserserviceService, private router: Router, private fb: FormBuilder) {
    this.searchForm = this.fb.group({search: [""]});
  }

  ngOnInit() {
    this.userService.loadProfiles().subscribe((response: any) => {
      this.userProfiles = response.data;
    });
  }

  getUser(userid: string){
    this.router.navigate(['/users/',userid]);
  }

  search(value: any): void {
    this.searchUser = this.userProfiles.filter((val) => (val.firstName+" "+val.lastName).toLowerCase().includes(value));
  }
}
