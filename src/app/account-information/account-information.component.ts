import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.css']
})
export class AccountInformationComponent implements OnInit {

  constructor(private router: Router,
    
    ) { }
  

  ngOnInit(): void {
  }
  goBack() {
    this.router.navigate(['']);
  }
}
