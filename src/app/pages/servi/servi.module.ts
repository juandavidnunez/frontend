import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiRoutingModule } from './servi-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ServiRoutingModule
  ]
})
export class ServiModule { }
