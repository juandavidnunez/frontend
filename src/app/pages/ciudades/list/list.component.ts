import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ciudades } from 'src/app/models/ciudades.model';
import { CiudadesService } from 'src/app/services/ciudades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  Ciudades: Ciudades[];

  constructor(private service: CiudadesService,private router:Router) { 
    this.Ciudades = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.Ciudades = data;
      console.log(JSON.stringify(this.Ciudades));
    });
  }
  delete(id: number): void {
    Swal.fire({
      title: 'Eliminar departamento',
      text: '¿Está seguro que quiere eliminar este departamento?',
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
            text: 'El departamento ha sido eliminado correctamente.',
            icon: 'success',
            confirmButtonColor: '#232323', 
            background: '#1c1c1c', 
            color: '#ffffff' 
          });
          this.ngOnInit();
        });
      }
    });

    console.log('Eliminar departamento con id:', id);
  }

  update(id: number): void {
    this.router.navigate(["ciudades/update/"+id])

  }

  create(): void {
    this.router.navigate(["ciudades/create"])

  }
  view(id: number): void {
    this.router.navigate(["ciudades/view/"+id])

  }
}
