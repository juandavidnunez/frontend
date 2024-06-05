import { Component, OnInit } from '@angular/core';
import { Suscripciones } from 'src/app/models/suscripciones.model';
import { SuscripcionesService } from 'src/app/services/suscripciones.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  suscripciones: Suscripciones[];

  constructor(private service: SuscripcionesService) { 
    this.suscripciones = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.suscripciones = data;
      console.log(JSON.stringify(this.suscripciones));
    });
  }
  deleteSuscripciones(id: number): void {
    // Implementar la lógica para eliminar un departamento
    console.log('Eliminar suscripciones con id:', id);
  }

  updateSuscripciones(id: number): void {
    // Implementar la lógica para actualizar un departamento
    console.log('Actualizar suscripciones con id:', id);
  }

  createSuscripciones(): void {
    // Implementar la lógica para crear un nuevo departamento
    console.log('Crear una nueva suscripciones');
  }
}
