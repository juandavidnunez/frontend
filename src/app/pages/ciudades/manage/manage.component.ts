import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ciudades } from 'src/app/models/ciudades.model';
import { CiudadesService } from 'src/app/services/ciudades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  mode: number;
  ciudad: Ciudades;
  theFormGroup: FormGroup;
  trySend: boolean;

  constructor(
    private activateRoute: ActivatedRoute,
    private service: CiudadesService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.trySend = false;
    this.mode = 1;
    this.ciudad = { id: 0, nombre: '', departamento_id: 0 };
  }

  ngOnInit(): void {
    this.configFormGroup();
    this.setMode();
    if (this.activateRoute.snapshot.params.id) {
      this.ciudad.id = this.activateRoute.snapshot.params.id;
      this.getciudad(this.ciudad.id);
    }
  }

  private setMode(): void {
    const currentUrl = this.activateRoute.snapshot.url.join('/');
    if (currentUrl.includes('view')) {
      this.mode = 1;
    } else if (currentUrl.includes('create')) {
      this.mode = 2;
    } else if (currentUrl.includes('update')) {
      this.mode = 3;
    }
  }

  configFormGroup(): void {
    this.theFormGroup = this.formBuilder.group({
      departamento_id:[0,[Validators.required,Validators.min(1),Validators.max(100)]],
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]]
    });
  }

  get formControls() {
    return this.theFormGroup.controls;
  }

  getciudad(id: number): void {
    this.service.view(id).subscribe(data => {
      this.ciudad = data;
    });
  }

  create(): void {
    if (this.theFormGroup.invalid) {
      this.trySend = true;
      Swal.fire("Error en el formulario", "Ingrese correctamente los datos solicitados", "error");
      return;
    }
    this.service.create(this.ciudad).subscribe(() => {
      Swal.fire("Creación Exitosa", "Se ha creado un nuevo registro", "success");
      this.router.navigate(["ciudades/list"]);
    });
  }

  update(): void {
    if (this.theFormGroup.invalid) {
      this.trySend = true;
      Swal.fire("Error en el formulario", "Ingrese correctamente los datos solicitados", "error");
      return;
    }
    this.service.update(this.ciudad).subscribe(() => {
      Swal.fire("Actualización Exitosa", "Se ha actualizado el registro", "success");
      this.router.navigate(["ciudades/list"]);
    });
  }
}
