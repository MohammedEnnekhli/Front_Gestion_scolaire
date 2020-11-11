import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/data.service';
import { Prof } from '../Models/Prof';
import { Groupe } from '../Models/Groupe';
import { Eleve } from '../Models/Eleve';
declare const toggleProf: any;
@Component({
  selector: 'app-enseigant',
  templateUrl: './enseigant.component.html',
  styleUrls: ['./enseigant.component.css']
})
export class EnseigantComponent implements OnInit {

   prof:Prof;
   eleveInfo:Eleve;
   groupe:Groupe;
   groupes:Array<Groupe>;
   elevesOfGroupe:Array<Eleve>;

  constructor(public authenticationService:AuthenticationService,
    private dataService:DataService) { }

  ngOnInit() {
    this.getProf();
  }

  getProf(){
     this.dataService.getResource("http://localhost:8087/profs/search/findByEmail?email="+this.authenticationService.username)
     .subscribe((data:Prof)=>{
       this.prof=data;
       this.getGroupesOfProf(this.prof._links.groupe.href);
     },err=>{
       console.log(err);
     });
  }
  getGroupesOfProf(url:string){
    this.dataService.getResource(url)
    .subscribe((data:any)=>{
      this.groupes=data._embedded.groupes;
    },err=>{
      console.log(err);
    });
  }

  getGoupeList(groupe:Groupe){
    
    this.dataService.getResource(groupe._links.eleves.href).subscribe((data:any)=>{
     this.elevesOfGroupe=data._embedded.eleves;
    },err=>{
      console.log(err);
    });
    this.groupe=groupe;
  }

  getEelve(eleve:Eleve){
    this.eleveInfo=eleve;
  }

  onToggle(){
    toggleProf();
  }
}
