import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Suscripciones } from 'src/app/models/suscripciones.model';
import { SuscripcionesService } from 'src/app/services/suscripciones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  suscripciones: Suscripciones[];

  constructor(private service: SuscripcionesService, private router:Router) { 
    this.suscripciones = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.suscripciones = data;
      console.log(JSON.stringify(this.suscripciones));
    });
  }
  deleteSuscripciones(id: number): void {
    Swal.fire({
      title: 'Eliminar suscripciones',
      text: '¿Está seguro que quiere eliminar este suscripciones?',
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
            text: 'El suscripciones ha sido eliminado correctamente.',
            icon: 'success',
            confirmButtonColor: '#232323', 
            background: '#1c1c1c', 
            color: '#ffffff' 
          });
          this.ngOnInit();
        });
      }
    });
    console.log('Eliminar suscripciones con id:', id);
  }

  viewSuscripciones(id:number){
    this.router.navigate(["suscripciones/view/"+id])
    console.log('Visualizar a ', id)
  }

  updateSuscripciones(id: number): void {
    this.router.navigate(["suscripciones/update/"+id])
    console.log('Actualizar servicio con id:', id);
  }

  createSuscripciones(): void {
    this.router.navigate(["suscripciones/create/"])
    console.log('Crear un nuevo servicio');
  }
}
