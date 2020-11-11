import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { Matiere } from '../Models/Matiere';
import { Filiere } from '../Models/Filiere';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  model:String[]=["Eleve","Prof","Groupe","Matiere","Filiere"];
  matieres:Array<Matiere>;
  filieres:Array<Filiere>;
  constructor(private dataService:DataService) { 
  
  }

  ngOnInit() {
  }

  getMatiers(){
    this.dataService.getResource("http://localhost:8087/matieres").subscribe((data:any)=>{
      this.matieres=data._embedded.matieres;
    },err=>
    console.error(err)
    );
  }
  getFilieres(){
    this.dataService.getResource("http://localhost:8087/filieres").subscribe((data:any)=>{
      this.filieres=data._embedded.filieres;
    },err=>
    console.error(err)
    );
  }
  
  

}
