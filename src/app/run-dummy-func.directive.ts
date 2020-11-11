import { Directive, Output,EventEmitter, OnInit, ElementRef, Input } from '@angular/core';
import { DataService } from './services/data.service';
import { Groupe } from './Models/Groupe';
import { Niveau } from './Models/Niveau';

@Directive({
  selector: '[runDummyFunc]'
})
export class RunDummyFuncDirective implements OnInit{

  //@Output() runDummy: EventEmitter<any> = new EventEmitter<any>();
  @Input('runDummyFunc') groupe: Groupe;

  
  constructor(private el: ElementRef,private dataService:DataService) { }

  ngOnInit() {
   
      this.dataService.getResource(this.groupe._links.niveau.href).subscribe((data:Niveau)=>{
      this.el.nativeElement.textContent = data.nomN;
      },err=>{
        console.log(err);
      });
  }

}
