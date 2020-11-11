import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EleveComponent } from './eleve/eleve.component';
import { EnseigantComponent } from './enseigant/enseigant.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { GroupeAdminComponent } from './groupe-admin/groupe-admin.component';
import { JwPaginationComponent } from './jw-pagination/jw-pagination.component';
import { EleveAdminComponent } from './eleve-admin/eleve-admin.component';
import { ProfAdminComponent } from './prof-admin/prof-admin.component';
import { MatiereAdminComponent } from './matiere-admin/matiere-admin.component';

import {MatSortModule} from '@angular/material'
import {MatIconModule} from '@angular/material'
import { MatPaginatorModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RunDummyFuncDirective } from './run-dummy-func.directive';

@NgModule({
  declarations: [
    AppComponent,
    EleveComponent,
    EnseigantComponent,
    LoginComponent,
    AdminComponent,
    AdminComponent,
    GroupeAdminComponent,
    JwPaginationComponent,
    EleveAdminComponent,
    ProfAdminComponent,
    MatiereAdminComponent,
    RunDummyFuncDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
