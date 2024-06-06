import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comentarios } from 'src/app/models/comentarios.model';
import { ComentariosService } from 'src/app/services/comentarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  comentarios: Comentarios[];

  constructor(private service: ComentariosService, private router:Router) { 
    this.comentarios = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.comentarios = data;
      console.log(JSON.stringify(this.comentarios));
    });
  }
  deleteComentarios(id: number): void {
    Swal.fire({
      title: 'Eliminar comentarios',
      text: '¿Está seguro que quiere eliminar este comentarios?',
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
            text: 'El comentarios ha sido eliminado correctamente.',
            icon: 'success',
            confirmButtonColor: '#232323', 
            background: '#1c1c1c', 
            color: '#ffffff' 
          });
          this.ngOnInit();
        });
      }
    });
    console.log('Eliminar comentario con id:', id);
  }

  viewComentarios(id:number){
    this.router.navigate(["comentarios/view/"+id])
    console.log('Visualizar a ', id)
  }

  updateComentarios(id: number): void {
    this.router.navigate(["comentarios/update/"+id])
    console.log('Actualizar servicio con id:', id);
  }

  createComentarios(): void {
    this.router.navigate(["comentarios/create/"])
    console.log('Crear un nuevo servicio');
  }
}
