import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  avatar: any = {};
  constructor(private router: Router,
    private loginService: LoginService
  ) { }


  ngOnInit(): void {
    this.avatar.url = 'https://i.9mobi.vn/cf/images/ba/2018/4/16/anh-avatar-dep-4.jpg';
  }
  goBack() {
    this.router.navigate(['']);
  }

  onSubmit(value: any) {
    console.log(value);
    if (value.username != ""&& value.mail !="") {
      this.loginService.SetLogin(true);
      this.router.navigate(['verification']);
    }
    else{
    }
  }
}
