import { Component, OnInit } from '@angular/core';
import { EjecucionServicio } from 'src/app/models/ejecucion-servicio.model';
import { EjecucionServicioService } from 'src/app/services/ejecucion-servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  ejecucion_servicios: EjecucionServicio[];

  constructor(private service: EjecucionServicioService) { 
    this.ejecucion_servicios = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.ejecucion_servicios = data;
      console.log(JSON.stringify(this.ejecucion_servicios));
    });
  }
  deleteEj_Servicio(id: number): void {
    Swal.fire({
      title: 'Eliminar ejecucion servicio',
      text: '¿Está seguro que quiere eliminar este ejecucion servicio?',
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
            text: 'El ejecucion servicio ha sido eliminado correctamente.',
            icon: 'success',
            confirmButtonColor: '#232323', 
            background: '#1c1c1c', 
            color: '#ffffff' 
          });
          this.ngOnInit();
        });
      }
    });
    console.log('Eliminar Ejecución de ejecucion servicio con id:', id);
  }

  updateEj_Servicio(id: number): void {
    // Implementar la lógica para actualizar un departamento
    console.log('Actualizar Ejecución de ejecucion servicio con id:', id);
  }

  createEj_Servicio(): void {
    // Implementar la lógica para crear un nuevo departamento
    console.log('Crear una nueva Ejecución de ejecucion servicio');
  }
}
