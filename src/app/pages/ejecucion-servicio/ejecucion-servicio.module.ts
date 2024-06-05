import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjecucionServicioRoutingModule } from './ejecucion-servicio-routing.module';
import { ListComponent } from './list/list.component';
import { ManageComponent } from './manage/manage.component';


@NgModule({
  declarations: [
    ListComponent,
    ManageComponent
  ],
  imports: [
    CommonModule,
    EjecucionServicioRoutingModule
  ]
})
export class EjecucionServicioModule { }
