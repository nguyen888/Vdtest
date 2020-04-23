import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  avatar: any= {};
  constructor() { }

  ngOnInit(): void {
    this.avatar.url = 'https://i.9mobi.vn/cf/images/ba/2018/4/16/anh-avatar-dep-4.jpg';

  }

}
