import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Traslados } from 'src/app/models/traslados.model';
import { TrasladosService } from 'src/app/services/traslados.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  traslados: Traslados[];

  constructor(private service: TrasladosService, private router:Router) { 
    this.traslados = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.traslados = data;
      console.log(JSON.stringify(this.traslados));
    });
  }
  deleteTraslados(id: number): void {
    Swal.fire({
      title: 'Eliminar traslados',
      text: '¿Está seguro que quiere eliminar este traslados?',
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
            text: 'El traslados ha sido eliminado correctamente.',
            icon: 'success',
            confirmButtonColor: '#232323', 
            background: '#1c1c1c', 
            color: '#ffffff' 
          });
          this.ngOnInit();
        });
      }
    });
    console.log('Eliminar traslado con id:', id);
  }

  viewTraslados(id:number){
    this.router.navigate(["traslados/view/"+id])
    console.log('Visualizar a ', id)
  }

  updateTraslados(id: number): void {
    this.router.navigate(["traslados/update/"+id])
    console.log('Actualizar servicio con id:', id);
  }

  createTraslados(): void {
    this.router.navigate(["traslados/create/"])
    console.log('Crear un nuevo servicio');
  }
}
