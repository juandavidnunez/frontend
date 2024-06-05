import { Component, OnInit } from '@angular/core';
import { Chats } from 'src/app/models/chats.model';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  chats: Chats[];

  constructor(private service: ChatsService) { 
    this.chats = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.chats = data;
      console.log(JSON.stringify(this.chats));
    });
  }
  deleteChats(id: number): void {
    // Implementar la lógica para eliminar un departamento
    console.log('Eliminar chat con id:', id);
  }

  updateChats(id: number): void {
    // Implementar la lógica para actualizar un departamento
    console.log('Actualizar chat con id:', id);
  }

  createChats(): void {
    // Implementar la lógica para crear un nuevo departamento
    console.log('Crear un nuevo chat');
  }
}
