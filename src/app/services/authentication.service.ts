import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  host:string="http://localhost:8080";
  jwt:string;
  username:string;
  roles:Array<string>=new Array<string>();
  constructor(private http:HttpClient) { }


login(data){
  return this.http.post(this.host+'/login',data,{observe:'response'});
}  

saveToken(jwt: string) {
  localStorage.setItem('token',jwt);
  this.jwt=jwt; // on le met dans le contexte de l'application
  this.parseJWT() // récupérer le username et les roles grace à cette library :"https://www.npmjs.com/package/@auth0/angular-jwt"
 }
 parseJWT(){
   let jwtHelper = new JwtHelperService();
   let jwtObject=jwtHelper.decodeToken(this.jwt);
   this.username=jwtObject.sub;
   this.roles=jwtObject.roles;
  
 }

 isAdmin():boolean{
  return this.roles.indexOf("ADMIN")>=0;
}

isProf():boolean{
  return this.roles.indexOf("PROF")>=0;
}

isEleve():boolean{
  return this.roles.indexOf("ETUDIANT")>=0;
}

isAuthenticated():boolean{
  return this.roles.length!=0;
}

onLogOut(){
  localStorage.removeItem('token');
  this.initParams();
}

initParams(){
  
  this.jwt=undefined;
  this.username=undefined;
  this.roles=[];
}


}