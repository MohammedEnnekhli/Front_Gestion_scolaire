import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EleveComponent } from './eleve/eleve.component';
import { EnseigantComponent } from './enseigant/enseigant.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component'; 


const routes: Routes = [
  {path:'eleve', component:EleveComponent},
  {path:'enseigant', component:EnseigantComponent},
  {path:'admin', component:AdminComponent},
  {path:'login', component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
