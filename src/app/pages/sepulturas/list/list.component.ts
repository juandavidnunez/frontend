import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sepulturas } from 'src/app/models/sepulturas.model';
import { SepulturasService } from 'src/app/services/sepulturas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  sepulturas: Sepulturas[];

  constructor(private service: SepulturasService, private router:Router) { 
    this.sepulturas = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.sepulturas = data;
      console.log(JSON.stringify(this.sepulturas));
    });
  }
  deleteSepulturas(id: number): void {
    Swal.fire({
      title: 'Eliminar sepulturas',
      text: '¿Está seguro que quiere eliminar este sepulturas?',
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
            text: 'El sepulturas ha sido eliminado correctamente.',
            icon: 'success',
            confirmButtonColor: '#232323', 
            background: '#1c1c1c', 
            color: '#ffffff' 
          });
          this.ngOnInit();
        });
      }
    });
    console.log('Eliminar sepultura con id:', id);
  }

  viewSepulturas(id:number){
    this.router.navigate(["sepulturas/view/"+id])
    console.log('Visualizar a ', id)
  }

  updateSepulturas(id: number): void {
    this.router.navigate(["sepulturas/update/"+id])
    console.log('Actualizar servicio con id:', id);
  }

  createSepulturas(): void {
    this.router.navigate(["sepulturas/create/"])
    console.log('Crear un nuevo servicio');
  }
}
