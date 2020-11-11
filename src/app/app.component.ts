import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SchoolApplication';
  constructor(public authenticationService:AuthenticationService, private route:Router) { }

  ngOnInit() {
  }

  

  onLogout(){
    this.authenticationService.onLogOut();
    this.route.navigateByUrl("/");
  }
}
