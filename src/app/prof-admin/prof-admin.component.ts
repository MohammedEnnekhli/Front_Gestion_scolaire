import { Component, OnInit, ViewChild } from '@angular/core';
import { JwPaginationComponent } from '../jw-pagination/jw-pagination.component';
import { DataService } from '../services/data.service';
import { Prof } from '../Models/Prof';

@Component({
  selector: 'app-prof-admin',
  templateUrl: './prof-admin.component.html',
  styleUrls: ['./prof-admin.component.css']
})
export class ProfAdminComponent implements OnInit {
  host:string="http://localhost:8087";

  prof:Prof=new Prof();

  nomChercher:String="";
  
  @ViewChild('static', { static: true }) pagination: JwPaginationComponent;
    
  isAjouterProf:boolean=false;
  // array of all items to be paged
  profsArray:Array<Prof>; // array contains all profs
  // current page of items
  currentPageOfProfs: Array<Prof>;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getProfs();
  }
  ajouterProf(){
    this.dataService.postResource(this.host+"/profs/",this.prof).subscribe(data=>{
      this.isAjouterProf=true;
      this.profsArray.push(this.prof);
      //this.pagination.setPage(this.pagination.pager.totalPages);
    this.pagination.setPage(Math.floor(( this.profsArray.length)/this.pagination.pageSize)+1);
      
     
    });
    
  }
  reintialiseProf(){
    this.prof=new Prof();
  }
  
  editerProf(){
    this.dataService.putResource(this.host+"/profs/"+this.prof.id,this.prof).subscribe();
    let indexEdited=this.profsArray.map(x => x.id).indexOf(this.prof.id);
    this.profsArray.splice(indexEdited,1,this.prof);
      this.pagination.setPage(Math.floor(( indexEdited)/this.pagination.pageSize)+1);
  }
  

  supprimerProf(){
    this.dataService.deleteResource(this.host+"/profs/"+this.prof.id).subscribe();
    let indexDeleted=this.profsArray.map(x => x.id).indexOf(this.prof.id);
    this.profsArray.splice(indexDeleted,1);
    this.pagination.setPage(Math.floor(( indexDeleted)/this.pagination.pageSize)+1);
  }

  getProf(id:number){
    this.dataService.getResource(this.host+"/profs/"+id).subscribe((data:Prof)=>{
      this.prof=data;
    },err=>
    console.error(err)
    );
  }
  
  getProfs(){
    this.dataService.getResource(this.host+"/profs").subscribe((data:any)=>{
      this.profsArray=data._embedded.profs;
    },err=>
    console.error(err)
    );
  }
  onChangePageProf(currentPageOfProfs: Array<Prof>) {
    // update current page of items
    this.currentPageOfProfs = currentPageOfProfs;
}
  
  chercherProf(nomProf:string){

        this.dataService.getResource(this.host+"/profs/search/findByNomContains?mc="+nomProf).subscribe((data:any)=>{
          this.profsArray=data._embedded.profs;          
        },err=>
        console.error(err)
        );
      
      }

      onSort(){
        this.currentPageOfProfs.sort((a, b)=>{
            return a.nom.localeCompare(b.nom);
        } );
      }
      
    
}

