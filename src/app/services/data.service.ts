import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  host:string="http://localhost:8080";


  constructor(private http:HttpClient, private authenticationService:AuthenticationService) { }

  getResource(url:string){
    let headreJWT=new HttpHeaders({'authorization':this.authenticationService.jwt})
    return this.http.get(url,{headers:headreJWT});
  }

  postResource(url:string,model:any){
    let headreJWT=new HttpHeaders({'authorization':this.authenticationService.jwt})
    return this.http.post(url,model,{headers:headreJWT});
  }

  putResource(url:string,model:any){
    let headreJWT=new HttpHeaders({'authorization':this.authenticationService.jwt})
    return this.http.patch(url,model,{headers:headreJWT});
  }

  deleteResource(url:string){
    let headreJWT=new HttpHeaders({'authorization':this.authenticationService.jwt})
    return this.http.delete(url,{headers:headreJWT});
  }

}
