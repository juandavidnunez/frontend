import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ciudades } from 'src/app/models/ciudades.model';
import { Sede } from 'src/app/models/sede.model';
import { CiudadesService } from 'src/app/services/ciudades.service';
import { SedeService } from 'src/app/services/sede.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  mode: number;
  sede: Sede;
  theFormGroup: FormGroup;
  trySend: boolean;
  ciudades: Ciudades[]
  constructor(private activateRoute: ActivatedRoute, private service: SedeService,private ciudadesService: CiudadesService, private router: Router, private theFormBuilder: FormBuilder) {
    this.trySend = false;
    this.mode = 1;
    this.sede = {
      id: 0,
      nombre: "",
      direccion: "",
      telefono: 0,
      correo_electronico: "",
      ciudad_id:{
        id: null,
      }
    };
  }
  ciudadesList(){
    this.ciudadesService.list().subscribe(data=>{
      this.ciudades=data
    })
  }

  ngOnInit(): void {
    this.ciudadesList();
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
      this.sede.id = this.activateRoute.snapshot.params.id;
      this.getciudad(this.sede.id);
    }
  }

  configFormGroup() {
    this.theFormGroup = this.theFormBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      direccion: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      telefono: [0, [Validators.required, Validators.min(1), Validators.max(999999999999)]],
      ciudad_id: [null, [Validators.required ]],
      correo_electronico: ['', [Validators.required, Validators.email, Validators.minLength(2), Validators.maxLength(40)]]
    });
  }

  get formControls() {
    return this.theFormGroup.controls;
  }

  getciudad(id: number): void {
    this.service.view(id).subscribe(data => {
      this.sede = data;
    });
  }

  create(): void {
    if (this.theFormGroup.invalid) {
      this.trySend = true;
      Swal.fire("Error en el formulario", "Ingrese correctamente los datos solicitados", "error");
      return;
    }
    this.service.create(this.sede).subscribe(() => {
      Swal.fire("Creación Exitosa", "Se ha creado un nuevo registro", "success");
      this.router.navigate(["sede/list"]);
    });
  }

  update(): void {
    if (this.theFormGroup.invalid) {
      this.trySend = true;
      Swal.fire("Error en el formulario", "Ingrese correctamente los datos solicitados", "error");
      return;
    }
    this.service.update(this.sede).subscribe(() => {
      Swal.fire("Actualización Exitosa", "Se ha actualizado el registro", "success");
      this.router.navigate(["sede/list"]);
    });
  }
  
}
