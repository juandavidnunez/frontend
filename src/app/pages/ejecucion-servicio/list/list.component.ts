import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EjecucionServicio } from 'src/app/models/ejecucion-servicio.model';
import { EjecucionServicioService } from 'src/app/services/ejecucion-servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  ejecucion_servicio: EjecucionServicio[];

  constructor(private service: EjecucionServicioService, private router:Router) { 
    this.ejecucion_servicio = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.ejecucion_servicio = data;
      console.log(JSON.stringify(this.ejecucion_servicio));
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
    console.log('Eliminar de ejecucion servicio con id:', id);
  }

  updateEj_Servicio(id: number): void {
    this.router.navigate(["ejecucion_servicio/update/"+id])

  }

  createEj_Servicio(): void {
    this.router.navigate(["ejecucion_servicio/create"])

  }
  viewEj_Servicio(id: number): void {
    this.router.navigate(["ejecucion_servicio/view/"+id])

  }
}
