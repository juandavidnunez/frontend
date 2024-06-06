import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pagos } from 'src/app/models/pagos.model';
import { PagosService } from 'src/app/services/pagos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  pagos: Pagos[];

  constructor(private service: PagosService, private router:Router) { 
    this.pagos = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.pagos = data;
      console.log(JSON.stringify(this.pagos));
    });
  }
  deletePagos(id: number): void {
    Swal.fire({
      title: 'Eliminar pagos',
      text: '¿Está seguro que quiere eliminar este pagos?',
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
            text: 'El pagos ha sido eliminado correctamente.',
            icon: 'success',
            confirmButtonColor: '#232323', 
            background: '#1c1c1c', 
            color: '#ffffff' 
          });
          this.ngOnInit();
        });
      }
    });
    console.log('Eliminar pagos con id:', id);
  }

  viewPagos(id:number){
    this.router.navigate(["pagos/view/"+id])
    console.log('Visualizar a ', id)
  }

  updatePagos(id: number): void {
    this.router.navigate(["pagos/update/"+id])
    console.log('Actualizar servicio con id:', id);
  }

  createPagos(): void {
    this.router.navigate(["pagos/create/"])
    console.log('Crear un nuevo servicio');
  }
}
