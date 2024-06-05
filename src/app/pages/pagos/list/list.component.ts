import { Component, OnInit } from '@angular/core';
import { Pagos } from 'src/app/models/pagos.model';
import { PagosService } from 'src/app/services/pagos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  pagos: Pagos[];

  constructor(private service: PagosService) { 
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
    // Implementar la lógica para eliminar un departamento
    console.log('Eliminar pagos con id:', id);
  }

  updatePagos(id: number): void {
    // Implementar la lógica para actualizar un departamento
    console.log('Actualizar pagos con id:', id);
  }

  createPagos(): void {
    // Implementar la lógica para crear un nuevo departamento
    console.log('Crear una nueva pagos');
  }
}
