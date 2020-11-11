import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DataService } from '../services/data.service';
import { Matiere } from '../Models/Matiere';

@Component({
  selector: 'app-matiere-admin',
  templateUrl: './matiere-admin.component.html',
  styleUrls: ['./matiere-admin.component.css']
})
export class MatiereAdminComponent implements OnInit, AfterViewInit {
  host:string="http://localhost:8087";
  public displayedColumns = ['id', 'Name','details', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Matiere>();
  @ViewChild(MatPaginator, { static: true  }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true  }) sort: MatSort;
  constructor(private repoService: DataService) { }
 
  ngOnInit() {
    this.getMatieres();
    
  }

 
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
 }

 public getMatieres(){
   this.repoService.getResource(this.host+"/matieres").subscribe((res:any)=>{
     this.dataSource.data=res._embedded.matieres;
   })
 }

 applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
  public redirectToDetails = (id: string) => {
    
  }
 
  public redirectToUpdate = (id: string) => {
    
  }
 
  public redirectToDelete = (id: string) => {
    
  }
}
