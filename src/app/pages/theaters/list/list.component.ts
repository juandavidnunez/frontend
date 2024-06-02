import { Component, OnInit } from '@angular/core';
import { Theater } from 'src/app/models/theater.model';
import { TheaterService } from 'src/app/services/theater.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
 theaters:Theater[];
  constructor(private service:TheaterService) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
  this.miServicioEstudiantes.listar().
  subscribe(data => {
  this.estudiantes=data;
  });
  }
  agregar():void{
  console.log("agregando nuevo")  }
  editar(id:string):void{
  console.log("editando a "+id)
  }
  eliminar(id:string):void{
  Swal.fire({
  title: 'Eliminar Estudiante',
  text: "Está seguro que quiere eliminar el estudiante?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, eliminar'
  }).then((result) => {
  if (result.isConfirmed) {
  this.service.eliminar(id).
  subscribe(data => {
  Swal.fire(
  'Eliminado!',
  'El estudiante ha sido eliminada correctamente',
  'success'
  )
  this.ngOnInit();
  });
  }
  })
  
  }

}
