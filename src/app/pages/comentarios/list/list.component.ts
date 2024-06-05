import { Component, OnInit } from '@angular/core';
import { Comentarios } from 'src/app/models/comentarios.model';
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  comentarios: Comentarios[];

  constructor(private service: ComentariosService) { 
    this.comentarios = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.comentarios = data;
      console.log(JSON.stringify(this.comentarios));
    });
  }
  deleteComentarios(id: number): void {
    // Implementar la lógica para eliminar un departamento
    console.log('Eliminar comentario con id:', id);
  }

  updateComentarios(id: number): void {
    // Implementar la lógica para actualizar un departamento
    console.log('Actualizar comentario con id:', id);
  }

  createComentarios(): void {
    // Implementar la lógica para crear un nuevo departamento
    console.log('Crear un nuevo comentario');
  }
}
