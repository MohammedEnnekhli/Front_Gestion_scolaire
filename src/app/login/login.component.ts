import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  constructor(private authenticationService:AuthenticationService, private router:Router,private location:Location) { }

  ngOnInit() {
  }

  onLogin(data){
    this.authenticationService.login(data).subscribe(resp=>{
      let jwt=resp.headers.get('Authorization');
      this.authenticationService.saveToken(jwt);//stocker le token dans le local storage
      if(this.authenticationService.isAdmin()){
        this.router.navigateByUrl('/admin');
      }else if(this.authenticationService.isProf()){
        this.router.navigateByUrl('/enseigant');
      }else if(this.authenticationService.isEleve()){
        this.router.navigateByUrl('/eleve');
      }
      // this.location.back(); // to go back to a previous page
     //this.router.navigateByUrl('/');
   
    },err=>{
      console.log(err)
    })
   
   }

}
