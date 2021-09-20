import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginservice: LoginService,private route:Router) { }

  ngOnInit(): void {
  }
   isAuthenticaterUser(){ 
    return this.loginservice.isLogin();
  }

  logout(){
    this.loginservice.logOut();
    this.route.navigateByUrl('register');
  }

}
