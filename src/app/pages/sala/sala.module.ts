import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaRoutingModule } from './sala-routing.module';
import { ListComponent } from './list/list.component';
import { ManageComponent } from './manage/manage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    ManageComponent
  ],
  imports: [
    CommonModule,
    SalaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SalaModule { }
