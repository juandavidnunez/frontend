import { Component, OnInit } from '@angular/core';
import { Tipo } from 'src/app/models/tipo.model';
import { TipoService } from 'src/app/services/tipo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  tipo: Tipo[];

  constructor(private service:TipoService) { 
    this.tipo= [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.tipo = data;
      console.log(JSON.stringify(this.tipo));
    });
  }
 


  

 
  
}