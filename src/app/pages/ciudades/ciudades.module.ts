import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CiudadesRoutingModule } from './ciudades-routing.module';
import { ManageComponent } from './manage/manage.component';


@NgModule({
  declarations: [
    ListComponent,
    ManageComponent
  ],
  imports: [
    CommonModule,
    CiudadesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CiudadesModule { }
