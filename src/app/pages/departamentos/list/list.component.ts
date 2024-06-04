import { Component, OnInit } from '@angular/core';
import { Departamentos } from 'src/app/models/departamentos.model';
import { DepartamentosService } from 'src/app/services/departamentos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  departamentos:Departamentos[]
  constructor(private service:DepartamentosService) { 
    this.departamentos=[]
  }

  ngOnInit(): void {
  }
list(){
  this.service.list().subscribe(data =>{
    console.log("hola")
    this.departamentos=data
    console.log(JSON.stringify(this.departamentos))
   })

}
}
