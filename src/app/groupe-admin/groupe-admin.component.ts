import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Niveau } from '../Models/Niveau';
import { DataService } from '../services/data.service';
import { Groupe } from '../Models/Groupe';
import { Filiere } from '../Models/Filiere';
import { MatTableDataSource, MatPaginator, MatSort, MatTable } from '@angular/material';


@Component({
  selector: 'app-groupe-admin',
  templateUrl: './groupe-admin.component.html',
  styleUrls: ['./groupe-admin.component.css']
})


export class GroupeAdminComponent implements OnInit, AfterViewInit{
  host:string="http://localhost:8087";
  groupe:Groupe=new Groupe();
  groupes:Array<Groupe>;
  niveaux:Array<Niveau>;
  filieres:Array<Filiere>;
  isAjouterGroupe:number;
  isMAJGroupe:number;
  niveau: Niveau;
  filiere:Filiere;

  displayedColumns: string[] = ['nomG', 'niveau', 'filiere', 'update', 'delete'];
  dataSource=new MatTableDataSource<Groupe>();
  @ViewChild(MatPaginator, { static: true  }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true  }) sort: MatSort;
  @ViewChild(MatTable, { static: true  }) table: MatTable<Groupe>;


  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getGroupes();

  }

  transform(url:string): string{
    return this.getFiliere(url);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
 }

 applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

  getGroupe(id:number){
    this.dataService.getResource(this.host+"/groupes/"+id).subscribe((data:Groupe)=>{
      this.groupe=data;
    },err=>{
      console.log(err);
    });
    
    this.isMAJGroupe=0;

  }

  resetGroupe(){
    this.groupe=new Groupe();
    this.isAjouterGroupe=0;

  }
  ajouterGroupe(){
    this.dataService.postResource(this.host+"/groupes/",this.groupe).subscribe((data:Groupe)=>{
      this.dataService.getResource(data._links.niveau.href).subscribe((niveau:Niveau)=>{
        this.groupe.niveau=niveau;
      },err=>{
        console.log(err);
      });
      this.dataService.getResource(data._links.filiere.href).subscribe((filiere:Filiere)=>{
        this.groupe.filiere=filiere;
      },err=>{
        console.log(err);
      });
      this.groupe.id=data.id;
      this.isAjouterGroupe=1;
      this.groupes.push(this.groupe);
      this.dataSource.data=this.groupes;
      this.table.renderRows();
    },err=>{
      this.isAjouterGroupe=0;
      console.log(err);
    });
    
    
  }
  editerGroupe(){
   this.dataService.putResource(this.host+"/groupes/"+this.groupe.id,this.groupe).subscribe((data:Groupe)=>{

    this.dataService.getResource(data._links.niveau.href).subscribe((niveau:Niveau)=>{
      data.niveau=niveau;
    },err=>{
      console.log(err);
    });
    this.dataService.getResource(data._links.filiere.href).subscribe((filiere:Filiere)=>{
      data.filiere=filiere;
    },err=>{
      console.log(err);
    });

    let indexEdited=this.groupes.map(x => x.id).indexOf(this.groupe.id);
    this.groupes.splice(indexEdited,1,data);
    this.isMAJGroupe=1;
    this.dataSource.data=this.groupes;
    this.table.renderRows();
   },err=>{
    this.isMAJGroupe=0;
    console.log(err);
   });
   
  }
  supprimerGroupe(){

    this.dataService.deleteResource(this.host+"/groupes/"+this.groupe.id).subscribe((data:Groupe)=>{
      let indexDeleted=this.groupes.map(x => x.id).indexOf(this.groupe.id);

      this.groupes.splice( indexDeleted,1);
      this.dataSource.data=this.groupes;
      this.table.renderRows();
    },err=>{
      alert( "Groupe non Supprimer");

    });
  }
  getFiliere(url:string):string{
    this.dataService.getResource(url).subscribe((data:any)=>{
      this.filiere=data;
      ;
    },err=>
    console.error(err)
   );
   return this.filiere.nomF;
  
}
  getGroupes(){
    this.dataService.getResource(this.host+"/groupes").subscribe((data:any)=>{
      this.groupes=data._embedded.groupes;
        this.groupes.forEach(g => {
          this.dataService.getResource(g._links.niveau.href).subscribe((n:Niveau)=>{
            g.niveau=n;
          },err=>
          console.error(err)
         );

         this.dataService.getResource(g._links.filiere.href).subscribe((f:Filiere)=>{
          g.filiere=f;
        },err=>
        console.error(err)
       );
        });
        this.dataSource.data = this.groupes;

    },err=>
    console.error(err)
    );
    
  }

  getFilieres(){
    this.dataService.getResource(this.host+"/filieres").subscribe((data:any)=>{
      this.filieres=data._embedded.filieres;
    },err=>
    console.error(err)
    );
  }
  getNiveaux(){
    this.dataService.getResource(this.host+"/niveaux").subscribe((data:any)=>{
      this.niveaux=data._embedded.niveaus;
    },err=>
    console.error(err)
    );
  }
  
}
