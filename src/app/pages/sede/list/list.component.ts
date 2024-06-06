import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sede } from 'src/app/models/sede.model';
import { SedeService } from 'src/app/services/sede.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  sedes:Sede[];

  constructor(private service: SedeService,private router:Router) { 
    this.sedes = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.sedes = data;
      console.log(JSON.stringify(this.sedes));
    });
  }
  deleteDepartment(id: number): void {
    Swal.fire({
      title: 'Eliminar Sede',
      text: '¿Está seguro que quiere eliminar este Sede?',
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
            text: 'El Sede ha sido eliminado correctamente.',
            icon: 'success',
            confirmButtonColor: '#232323', 
            background: '#1c1c1c', 
            color: '#ffffff' 
          });
          this.ngOnInit();
        });
      }
    });

    console.log('Eliminar Sede con id:', id);
  }

  updateDepartment(id: number): void {
    this.router.navigate(["sede/update/"+id])

  }

  createDepartment(): void {
    this.router.navigate(["sede/create"])

  }
  viewDepartment(id: number): void {
    this.router.navigate(["sede/view/"+id])

  }
}
