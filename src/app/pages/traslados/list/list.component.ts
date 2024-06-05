import { Component, OnInit } from '@angular/core';
import { Traslados } from 'src/app/models/traslados.model';
import { TrasladosService } from 'src/app/services/traslados.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  traslados: Traslados[];

  constructor(private service: TrasladosService) { 
    this.traslados = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.traslados = data;
      console.log(JSON.stringify(this.traslados));
    });
  }
  deleteTraslados(id: number): void {
    // Implementar la lógica para eliminar un departamento
    console.log('Eliminar traslado con id:', id);
  }

  updateTraslados(id: number): void {
    // Implementar la lógica para actualizar un departamento
    console.log('Actualizar traslados con id:', id);
  }

  createTraslados(): void {
    // Implementar la lógica para crear un nuevo departamento
    console.log('Crear un nuevo traslados');
  }
}
