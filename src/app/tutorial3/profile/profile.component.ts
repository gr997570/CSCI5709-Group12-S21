import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  fname: string = "";
  lname: string = "";
  email: string = "";

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.location.replaceState("/profile");
    this.route.queryParams.subscribe(params => {
      this.fname = params["fname"];
      this.lname = params["lname"];
      this.email = params["email"];
    });
  }

}
