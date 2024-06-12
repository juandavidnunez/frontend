import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sala } from 'src/app/models/sala.model';
import { Sede } from 'src/app/models/sede.model';
import { SalaService } from 'src/app/services/sala.service';
import { SedeService } from 'src/app/services/sede.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  mode: number;
  sala: Sala;
  theFormGroup: FormGroup;
  trySend: boolean;
  sedes: Sede[]

  constructor(private activateRoute: ActivatedRoute, private service: SalaService,
    private sedeService: SedeService, private router: Router, private theFormBuilder: FormBuilder) {
    this.trySend = false;
    this.mode = 1;
    this.sala = {
      id: 0,
      nombre: "",
      capacidad: 0,
      disponibilidad: false,
      sede_id: {
        id:null
      }
    };
  }
 sedeList(){
  this.sedeService.list().subscribe(data=>{
    this.sedes=data
  })

 }
  ngOnInit(): void {
    this.sedeList();
    this.configFormGroup();
    const currentUrl = this.activateRoute.snapshot.url.join('/');
    if (currentUrl.includes('view')) {
      this.mode = 1;
    }
    if (currentUrl.includes('create')) {
      this.mode = 2;
    }
    if (currentUrl.includes('update')) {
      this.mode = 3;
    }
    if (this.activateRoute.snapshot.params.id) {
      this.sala.id = this.activateRoute.snapshot.params.id;
      this.getciudad(this.sala.id);
    }
  }

  configFormGroup() {
    this.theFormGroup = this.theFormBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      capacidad: [0, [Validators.required, Validators.min(1), Validators.max(9999)]],
      disponibilidad: [false, [Validators.required]],
      sede_id: [null, [Validators.required]]
    });
  }

  get formControls() {
    return this.theFormGroup.controls;
  }

  getciudad(id: number): void {
    this.service.view(id).subscribe(data => {
      this.sala = data;
    });
  }

  create(): void {
    if (this.theFormGroup.invalid) {
      this.trySend = true;
      Swal.fire("Error en el formulario", "Ingrese correctamente los datos solicitados", "error");
      return;
    }
    this.service.create(this.sala).subscribe(() => {
      Swal.fire("Creación Exitosa", "Se ha creado un nuevo registro", "success");
      this.router.navigate(["sala/list"]);
    });
  }

  update(): void {
    if (this.theFormGroup.invalid) {
      this.trySend = true;
      Swal.fire("Error en el formulario", "Ingrese correctamente los datos solicitados", "error");
      return;
    }
    this.service.update(this.sala).subscribe(() => {
      Swal.fire("Actualización Exitosa", "Se ha actualizado el registro", "success");
      this.router.navigate(["sala/list"]);
    });
  }
}
