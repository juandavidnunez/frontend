import { Component, OnInit } from '@angular/core';
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

  constructor(private service: PlanesService) { 
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

  updatePlanes(id: number): void {
    // Implementar la lógica para actualizar un departamento
    console.log('Actualizar Planes con id:', id);
  }

  createPlanes(): void {
    // Implementar la lógica para crear un nuevo departamento
    console.log('Crear una nueva Planes');
  }
}
