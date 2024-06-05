import { Component, OnInit } from '@angular/core';
import { Servicios } from 'src/app/models/servicios.model';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  servicios: Servicios[];

  constructor(private service: ServiciosService) { 
    this.servicios = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.servicios = data;
      console.log(JSON.stringify(this.servicios));
    });
  }
  deleteServicio(id: number): void {
    // Implementar la lógica para eliminar un departamento
    console.log('Eliminar servicio con id:', id);
  }

  updateServicio(id: number): void {
    // Implementar la lógica para actualizar un departamento
    console.log('Actualizar servicio con id:', id);
  }

  createServicio(): void {
    // Implementar la lógica para crear un nuevo departamento
    console.log('Crear un nuevo servicio');
  }
}
