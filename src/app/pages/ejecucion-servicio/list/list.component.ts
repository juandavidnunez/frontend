import { Component, OnInit } from '@angular/core';
import { EjecucionServicio } from 'src/app/models/ejecucion-servicio.model';
import { EjecucionServicioService } from 'src/app/services/ejecucion-servicio.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  ejecucion_servicios: EjecucionServicio[];

  constructor(private service: EjecucionServicioService) { 
    this.ejecucion_servicios = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.ejecucion_servicios = data;
      console.log(JSON.stringify(this.ejecucion_servicios));
    });
  }
  deleteEj_Servicio(id: number): void {
    // Implementar la lógica para eliminar un departamento
    console.log('Eliminar Ejecución de Servicio con id:', id);
  }

  updateEj_Servicio(id: number): void {
    // Implementar la lógica para actualizar un departamento
    console.log('Actualizar Ejecución de Servicio con id:', id);
  }

  createEj_Servicio(): void {
    // Implementar la lógica para crear un nuevo departamento
    console.log('Crear una nueva Ejecución de Servicio');
  }
}
