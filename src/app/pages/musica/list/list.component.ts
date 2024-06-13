import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Musica } from 'src/app/models/musica.model';
import { MusicaService } from 'src/app/services/musica.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  musica: Musica[];

  constructor(private service: MusicaService,private router:Router) { 
    this.musica= [];
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().subscribe(data => {
      this.musica = data;
      console.log(JSON.stringify(this.musica));
    });
  }
 
 

  createDepartment(): void {
    this.router.navigate(["musica/create"])

  }
}
