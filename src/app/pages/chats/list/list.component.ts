import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chats } from 'src/app/models/chats.model';
import { ChatsService } from 'src/app/services/chats.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  chats: Chats[];

  constructor(private service: ChatsService, private router:Router) { 
    this.chats = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.chats = data;
      console.log(JSON.stringify(this.chats));
    });
  }
  deleteChats(id: number): void {
    Swal.fire({
      title: 'Eliminar chats',
      text: '¿Está seguro que quiere eliminar este chats?',
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
            text: 'El chats ha sido eliminado correctamente.',
            icon: 'success',
            confirmButtonColor: '#232323', 
            background: '#1c1c1c', 
            color: '#ffffff' 
          });
          this.ngOnInit();
        });
      }
    });
    console.log('Eliminar chat con id:', id);
  }

  viewChats(id:number){
    this.router.navigate(["chats/view/"+id])
    console.log('Visualizar a ', id)
  }

  updateChats(id: number): void {
    this.router.navigate(["chats/update/"+id])
    console.log('Actualizar servicio con id:', id);
  }

  createChats(): void {
    this.router.navigate(["chats/create/"])
    console.log('Crear un nuevo servicio');
  }
}
