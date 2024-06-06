import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Planes } from 'src/app/models/planes.model';
import { PlanesService } from 'src/app/services/planes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  planes: Planes[];

  constructor(private service: PlanesService, private router:Router) { 
    this.planes = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.planes = data;
      console.log(JSON.stringify(this.planes));
    });
  }
  deletePlanes(id: number): void {
    Swal.fire({
      title: 'Eliminar planes',
      text: '¿Está seguro que quiere eliminar este planes?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#232323', 
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      background: '#1c1c1c', 
      color: '#ffffff' 
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete(id).subscribe(data => {
          Swal.fire({
            title: 'Eliminado!',
            text: 'El planes ha sido eliminado correctamente.',
            icon: 'success',
            confirmButtonColor: '#232323', 
            background: '#1c1c1c', 
            color: '#ffffff' 
          });
          this.ngOnInit();
        });
      }
    });
    console.log('Eliminar Planes con id:', id);
  }

  viewPlanes(id:number){
    this.router.navigate(["planes/view/"+id])
    console.log('Visualizar a ', id)
  }

  updatePlanes(id: number): void {
    this.router.navigate(["planes/update/"+id])
    console.log('Actualizar servicio con id:', id);
  }

  createPlanes(): void {
    this.router.navigate(["planes/create/"])
    console.log('Crear un nuevo servicio');
  }
}
