import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/tutorial4/userservice.service';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from '../../tutorial4/users/user-profile';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userid: string;
  userProfile: UserProfile;

  constructor(private userService: UserserviceService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userid = params['id'];
    });
    this.userService.getUser(this.userid).subscribe((response: any) => {
      this.userProfile = response.data;
    });
  }
}
