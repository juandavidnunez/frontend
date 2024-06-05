import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CremacionesRoutingModule } from './cremaciones-routing.module';
import { ListComponent } from './list/list.component';
import { ManageComponent } from './manage/manage.component';


@NgModule({
  declarations: [
    ListComponent,
    ManageComponent
  ],
  imports: [
    CommonModule,
    CremacionesRoutingModule
  ]
})
export class CremacionesModule { }
