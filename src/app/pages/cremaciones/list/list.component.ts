import { Component, OnInit } from '@angular/core';
import { Cremaciones } from 'src/app/models/cremaciones.model';
import { CremacionesService } from 'src/app/services/cremaciones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cremaciones: Cremaciones[];

  constructor(private service: CremacionesService) { 
    this.cremaciones = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.cremaciones = data;
      console.log(JSON.stringify(this.cremaciones));
    });
  }
  deleteCremacion(id: number): void {
    Swal.fire({
      title: 'Eliminar cremaciones',
      text: '¿Está seguro que quiere eliminar este cremaciones?',
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
            text: 'El cremaciones ha sido eliminado correctamente.',
            icon: 'success',
            confirmButtonColor: '#232323', 
            background: '#1c1c1c', 
            color: '#ffffff' 
          });
          this.ngOnInit();
        });
      }
    });
    console.log('Eliminar cremación con id:', id);
  }

  updateCremacion(id: number): void {
    // Implementar la lógica para actualizar un departamento
    console.log('Actualizar cremación con id:', id);
  }

  createCremacion(): void {
    // Implementar la lógica para crear un nuevo departamento
    console.log('Crear una nueva cremación');
  }
}
