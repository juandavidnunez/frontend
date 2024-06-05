import { Component, OnInit } from '@angular/core';
import { Cremaciones } from 'src/app/models/cremaciones.model';
import { CremacionesService } from 'src/app/services/cremaciones.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cremaciones: Cremaciones[];

  constructor(private service: CremacionesService) { 
    this.cremaciones = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.cremaciones = data;
      console.log(JSON.stringify(this.cremaciones));
    });
  }
  deleteCremacion(id: number): void {
    // Implementar la lógica para eliminar un departamento
    console.log('Eliminar cremación con id:', id);
  }

  updateCremacion(id: number): void {
    // Implementar la lógica para actualizar un departamento
    console.log('Actualizar cremación con id:', id);
  }

  createCremacion(): void {
    // Implementar la lógica para crear un nuevo departamento
    console.log('Crear una nueva cremación');
  }
}
