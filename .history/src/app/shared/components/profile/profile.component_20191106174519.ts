import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/avatar.jpg';
  userName: string = 'Antoinne';
  userPost: string = 'WEB APP';
  
  constructor(public service: ProfileService) { }

  ngOnInit() {
  }

}
