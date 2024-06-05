import { Component, OnInit } from '@angular/core';
import { Sepulturas } from 'src/app/models/sepulturas.model';
import { SepulturasService } from 'src/app/services/sepulturas.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  sepulturas: Sepulturas[];

  constructor(private service: SepulturasService) { 
    this.sepulturas = [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.sepulturas = data;
      console.log(JSON.stringify(this.sepulturas));
    });
  }
  deleteSepulturas(id: number): void {
    // Implementar la lógica para eliminar un departamento
    console.log('Eliminar sepultura con id:', id);
  }

  updateSepulturas(id: number): void {
    // Implementar la lógica para actualizar un departamento
    console.log('Actualizar sepultura con id:', id);
  }

  createSepulturas(): void {
    // Implementar la lógica para crear un nuevo departamento
    console.log('Crear una nueva sepultura');
  }
}
