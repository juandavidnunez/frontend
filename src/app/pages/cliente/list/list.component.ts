import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  cliente: Cliente[];

  constructor(private service: ClienteService,private router:Router) { 
    this.cliente = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.cliente = data;
      console.log(JSON.stringify(this.cliente));

    });
  }
  deleteDepartment(_id: string): void {
    Swal.fire({
      title: 'Eliminar cliente',
      text: '¿Está seguro que quiere eliminar este cliente?',
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
        this.service.delete(_id).subscribe(data => {
          Swal.fire({
            title: 'Eliminado!',
            text: 'El cliente ha sido eliminado correctamente.',
            icon: 'success',
            confirmButtonColor: '#232323', 
            background: '#1c1c1c', 
            color: '#ffffff' 
          });
          this.ngOnInit();
        });
      }
    });

    console.log('Eliminar cliente con _id:', _id);
  }

  updateDepartment(_id: string): void {
    this.router.navigate(["cliente/update/"+_id])

  }

  createDepartment(): void {
    this.router.navigate(["cliente/create"])

  }
  viewDepartment(_id: string): void {
    this.router.navigate(["cliente/view/"+_id])

  }
}
