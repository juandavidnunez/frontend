import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private service: CremacionesService, private router:Router) { 
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

  viewCremacion(id:number){
    this.router.navigate(["cremaciones/view/"+id])
    console.log('Visualizar a ', id)
  }

  updateCremacion(id: number): void {
    this.router.navigate(["cremaciones/update/"+id])
    console.log('Actualizar servicio con id:', id);
  }

  createCremacion(): void {
    this.router.navigate(["cremaciones/create/"])
    console.log('Crear un nuevo servicio');
  }
}
