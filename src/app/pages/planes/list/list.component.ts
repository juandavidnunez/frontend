import { Component, OnInit } from '@angular/core';
import { Planes } from 'src/app/models/planes.model';
import { PlanesService } from 'src/app/services/planes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  planes: Planes[];

  constructor(private service: PlanesService) { 
    this.planes = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.planes = data;
      console.log(JSON.stringify(this.planes));
    });
  }
  deletePlanes(id: number): void {
    // Implementar la lógica para eliminar un departamento
    console.log('Eliminar Planes con id:', id);
  }

  updatePlanes(id: number): void {
    // Implementar la lógica para actualizar un departamento
    console.log('Actualizar Planes con id:', id);
  }

  createPlanes(): void {
    // Implementar la lógica para crear un nuevo departamento
    console.log('Crear una nueva Planes');
  }
}
