import { Component, OnInit, ViewChild } from '@angular/core';
import { Eleve } from '../Models/Eleve';
import { DataService } from '../services/data.service';
import { Groupe } from '../Models/Groupe';

@Component({
  selector: 'app-eleve-admin',
  templateUrl: './eleve-admin.component.html',
  styleUrls: ['./eleve-admin.component.css']
})
export class EleveAdminComponent implements OnInit {
  eleve:Eleve=new Eleve();
  nomChercher:String="";
  elevesTrouver:boolean=true;
  isAjouter:boolean=false;
  pages:Array<number>;
  nbrPages:number;
  size:number=5;
  pageCourante:number=0;
  pageCouranteProf:number=0;
  totalEleves: any;
  elevesArray:Array<Eleve>; // array contains just eleves of PageCourante
  groupes:Array<Groupe>;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getEleves();
  }
  getEleves(){
    this.dataService.getResource("http://localhost:8087/eleves?size="+this.size+"&page="+ this.pageCourante).subscribe((data:any)=>{
      this.elevesArray=data._embedded.eleves;
      this.pages=new Array(data.page.totalPages);
      this.nbrPages=data.page.totalPages;
      this.totalEleves=data.page.totalElements;
      this.nomChercher="";
      this.elevesTrouver=true;
    },err=>
    console.error(err)
    );
  }
  ajouterEleve(){
    this.dataService.postResource("http://localhost:8087/eleves/",this.eleve).subscribe(data=>{
      this.isAjouter=true;
      if((this.size*this.nbrPages)-(this.totalEleves)>0){
        this.goToPage(this.nbrPages-1);
      }else{
        this.goToPage(this.nbrPages);
      }
     
    });
    
  }
  reintialiseEleve(){
    this.eleve=new Eleve();
  }
  editerEleve(){
    this.dataService.putResource("http://localhost:8087/eleves/"+this.eleve.id,this.eleve).subscribe(data=>{

      this.elevesArray.splice(
        this.elevesArray.map(x => x.id).indexOf(this.eleve.id),1,this.eleve);
    },err=>{
      alert("probleme");
      console.log("problème de MAJ"+err);
    });
  }

  supprimerEleve(){
 
    this.dataService.deleteResource("http://localhost:8087/eleves/"+this.eleve.id).subscribe(data=>{
      
  if((this.size*this.nbrPages)%(this.totalEleves)==this.size-1 && this.pageCourante==this.nbrPages-1){ // quand on supprime le seul eleve dans la page,on retourne à la page précèdente 
    this.goToPage(this.pageCourante-1);
          } else{
    this.goToPage(this.pageCourante);
    
  }    
    });

  }

  goToPage(p:number){
    this.pageCourante=p;
    this.getEleves();
  }

  getEleve(id:number){
    this.dataService.getResource("http://localhost:8087/eleves/"+id).subscribe((data:Eleve)=>{
      this.eleve=data;
      console.log( this.eleve);
    },err=>
    console.error(err)
    );
  }

  chercherEleve(){
    if(this.nomChercher==""){
    this.getEleves();
    }else{
      this.dataService.getResource("http://localhost:8087/eleves/search/findByNom?nom="+this.nomChercher).subscribe((data:any)=>{
        this.elevesArray=data._embedded.eleves;
        
        if(this.elevesArray.length!=0){
          this.pages=new Array(1);
          this.elevesTrouver=true;
        }
        else{this.elevesTrouver=false;}
      },err=>
      console.error(err)
      );
        
    }
    
   
  }
  

  getGroupes():any{
    this.dataService.getResource("http://localhost:8087/groupes").subscribe((data:any)=>{
      this.groupes=data._embedded.groupes;
      return this.groupes;
    },err=>
    console.error(err)
    );
  }
  
}
