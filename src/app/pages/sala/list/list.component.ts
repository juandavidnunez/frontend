import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sala } from 'src/app/models/sala.model';
import { SalaService } from 'src/app/services/sala.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  salas:Sala[];

  constructor(private service: SalaService,private router:Router) { 
    this.salas = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.salas = data;
      console.log(JSON.stringify(this.salas));
    });
  }
  deleteDepartment(id: number): void {
    Swal.fire({
      title: 'Eliminar Sala',
      text: '¿Está seguro que quiere eliminar esta Sala?',
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
            text: 'El Sala ha sido eliminado correctamente.',
            icon: 'success',
            confirmButtonColor: '#232323', 
            background: '#1c1c1c', 
            color: '#ffffff' 
          });
          this.ngOnInit();
        });
      }
    });

    console.log('Eliminar Sala con id:', id);
  }

  updateDepartment(id: number): void {
    this.router.navigate(["sala/update/"+id])

  }

  createDepartment(): void {
    this.router.navigate(["sala/create"])

  }
  viewDepartment(id: number): void {
    this.router.navigate(["sala/view/"+id])

  }
}
