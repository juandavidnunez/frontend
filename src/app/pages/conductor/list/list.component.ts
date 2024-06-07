import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conductor } from 'src/app/models/conductor.model';
import { ConductorService } from 'src/app/services/conductor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  conductor: Conductor[];

  constructor(private service: ConductorService,private router:Router) { 
    this.conductor = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.conductor = data;
      console.log(JSON.stringify(this.conductor));

    });
  }
  deleteDepartment(_id: string): void {
    Swal.fire({
      title: 'Eliminar Conductor',
      text: '¿Está seguro que quiere eliminar este Conductor?',
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
            text: 'El Conductor ha sido eliminado correctamente.',
            icon: 'success',
            confirmButtonColor: '#232323', 
            background: '#1c1c1c', 
            color: '#ffffff' 
          });
          this.ngOnInit();
        });
      }
    });

    console.log('Eliminar Conductor con _id:', _id);
  }

  updateDepartment(_id: string): void {
    this.router.navigate(["conductor/update/"+_id])

  }

  createDepartment(): void {
    this.router.navigate(["conductor/create"])

  }
  viewDepartment(_id: string): void {
    this.router.navigate(["conductor/view/"+_id])

  }
}
