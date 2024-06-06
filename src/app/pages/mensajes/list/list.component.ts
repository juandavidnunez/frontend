import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mensajes } from 'src/app/models/mensajes.model';
import { MensajesService } from 'src/app/services/mensajes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  mensajes: Mensajes[];

  constructor(private service: MensajesService, private router:Router) { 
    this.mensajes = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.mensajes = data;
      console.log(JSON.stringify(this.mensajes));
    });
  }
  deleteMensajes(id: number): void {
    Swal.fire({
      title: 'Eliminar mensajes',
      text: '¿Está seguro que quiere eliminar este mensajes?',
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
            text: 'El mensajes ha sido eliminado correctamente.',
            icon: 'success',
            confirmButtonColor: '#232323', 
            background: '#1c1c1c', 
            color: '#ffffff' 
          });
          this.ngOnInit();
        });
      }
    });
    console.log('Eliminar mensajes con id:', id);
  }

  viewMensajes(id:number){
    this.router.navigate(["mensajes/view/"+id])
    console.log('Visualizar a ', id)
  }

  updateMensajes(id: number): void {
    this.router.navigate(["mensajes/update/"+id])
    console.log('Actualizar servicio con id:', id);
  }

  createMensajes(): void {
    this.router.navigate(["mensajes/create/"])
    console.log('Crear un nuevo servicio');
  }
}
