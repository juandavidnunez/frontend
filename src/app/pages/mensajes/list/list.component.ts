import { Component, OnInit } from '@angular/core';
import { Mensajes } from 'src/app/models/mensajes.model';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  mensajes: Mensajes[];

  constructor(private service: MensajesService) { 
    this.mensajes = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.mensajes = data;
      console.log(JSON.stringify(this.mensajes));
    });
  }
  deleteMensajes(id: number): void {
    // Implementar la lógica para eliminar un departamento
    console.log('Eliminar mensajes con id:', id);
  }

  updateMensajes(id: number): void {
    // Implementar la lógica para actualizar un departamento
    console.log('Actualizar mensajes con id:', id);
  }

  createMensajes(): void {
    // Implementar la lógica para crear un nuevo departamento
    console.log('Crear una nueva mensajes');
  }
}
