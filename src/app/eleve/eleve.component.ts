import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Eleve } from '../Models/Eleve';
import { DataService } from '../services/data.service';
import { Groupe } from '../Models/Groupe';
declare const myTest: any;
@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.css']
})
export class EleveComponent implements OnInit {
  
  eleve:Eleve;
  groupe:Groupe;
  constructor(public authenticationService:AuthenticationService,
              public dataService:DataService  ) { }

  ngOnInit() {
    this.getEleve();
  }

  getEleve(){
    this.dataService.getResource("http://localhost:8087/eleves/search/findByEmail?email="+this.authenticationService.username)
    .subscribe((data:Eleve)=>{
      this.eleve=data;
      this.getGroupeOfEleve(this.eleve._links.groupe.href);
    },err=>{
      console.log(err);
    })
  }

  getGroupeOfEleve(url:string){
    this.dataService.getResource(url)
    .subscribe((data:Groupe)=>{
      this.groupe=data;
    },err=>{
      console.log(err);
    });
   
  }

  onToggle(){
    myTest();
  }
 
}
