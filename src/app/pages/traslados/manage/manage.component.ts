import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicios } from 'src/app/models/servicios.model';
import { Traslados } from 'src/app/models/traslados.model';
import { ServiciosService } from 'src/app/services/servicios.service';
import { TrasladosService } from 'src/app/services/traslados.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  mode: number;
  traslado: Traslados;
  theFormGroup: FormGroup;
  trySend: boolean;
  servicios: Servicios[];

  constructor(private activateRoute: ActivatedRoute, private service: TrasladosService, private router: Router, private theFormBuilder: FormBuilder,
    private serviciosService: ServiciosService
  ) {
    this.servicios=[];
    this.trySend = false;
    this.mode = 1;
    this.traslado = { id: 0,
      origen: "",
      destino: "",
      fecha: new Date, 
      servicio:{
        id: null
      }
    };
  }

  serviciosList(){
    this.serviciosService.list().subscribe(data=>{
      this.servicios=data
    })
  }

  ngOnInit(): void {
    this.serviciosList();
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
      this.traslado.id = this.activateRoute.snapshot.params.id;
      this.getTraslados(this.traslado.id);
    }
  }

  configFormGroup() {
    this.theFormGroup = this.theFormBuilder.group({
      origen: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      destino: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      fecha: ["", Validators.required], // Modificamos el valor inicial a null
      servicio_id: [null, Validators.required]
    });
  }

  get getTheFormGroup() {
    return this.theFormGroup.controls;
  }

  getTraslados(id: number) {
    this.service.view(id).subscribe(data => {
      this.traslado = data;
      console.log(JSON.stringify(this.traslado));
      this.theFormGroup.patchValue(this.traslado); // Update form with the fetched data
    });
  }

  create() {
    if (this.theFormGroup.invalid) {
      this.trySend = true;
      Swal.fire("Error en el formulario", "Ingrese correctamente los datos solicitados", "error");
      return;
    }
    this.service.create(this.traslado).subscribe(data => {
      Swal.fire("Creación Exitosa", "Se ha creado un nuevo registro", "success");
      this.router.navigate(["traslados/list"]);
    });
  }

  update() {
    if (this.theFormGroup.invalid) {
      this.trySend = true;
      Swal.fire("Error en el formulario", "Ingrese correctamente los datos solicitados", "error");
      return;
    }
    this.service.update(this.traslado).subscribe(data => {
      Swal.fire("Actualización Exitosa", "Se ha actualizado el registro", "success");
      this.router.navigate(["traslados/list"]);
    });
  }
}
