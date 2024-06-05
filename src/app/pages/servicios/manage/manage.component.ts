import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicios } from 'src/app/models/servicios.model';
import { ServiciosService } from 'src/app/services/servicios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  mode: number; // 1->View, 2->Create, 3->Update
  servicios:Servicios;
  theFormGroup:FormGroup
  trySend:boolean
  constructor(private activateRoute: ActivatedRoute,
              private service:ServiciosService,
            private router:Router,
            private theFormBuilder:FormBuilder) {
    this.trySend=false
    this.mode = 1;
    this.servicios={
      id:0,
      descripcion:"",
      estado_servicio:true
    }
    this.configFormGroup()
  }
  configFormGroup(){
    this.theFormGroup=this.theFormBuilder.group({
      // primer elemento del vector, valor por defecto
      // lista, serán las reglas
      capacity:[0,[Validators.required,Validators.min(1),Validators.max(100)]],
      location:['',[Validators.required,Validators.minLength(2)]]
    })
  }
  get getTheFormGroup(){
    return this.theFormGroup.controls
  }
  // getserviciosData(){
  //   this.servicios.capacity=this.getTheFormGroup.capacity.value
  //   this.servicios.location=this.getTheFormGroup.location.value
  // }
  ngOnInit(): void {
    const currentUrl = this.activateRoute.snapshot.url.join('/');
    if (currentUrl.includes('view')) {
      this.mode=1;
    }else if(currentUrl.includes('create')){
      this.mode=2;
    }else if(currentUrl.includes('update')){
      this.mode=3;
    }
    if(this.activateRoute.snapshot.params.id){
      this.servicios.id=this.activateRoute.snapshot.params.id
      this.getservicios(this.servicios.id)
    }
  }
  getservicios(id:number){
    this.service.view(id).subscribe(data=>{
      this.servicios=data
      console.log("Servicio->"+JSON.stringify(this.servicios))
    })
    
  }
  create(){
    if (this.theFormGroup.invalid) {
      this.trySend=true
      Swal.fire("Error en el formulario","Ingrese correctamente los datos solicitados","error")
      return
    }
    this.service.create(this.servicios).subscribe(data=>{
      Swal.fire("Creación Exitosa","Se ha creado un nuevo registro","success")
      this.router.navigate(["servicios/list"])
    })
  }
  update(){
    if (this.theFormGroup.invalid) {
      this.trySend=true
      Swal.fire("Error en el formulario","Ingrese correctamente los datos solicitados","error")
      return
    }
    this.service.update(this.servicios).subscribe(data=>{
      Swal.fire("Actualización Exitosa","Se ha actualizado el registro","success")
      this.router.navigate(["servicios/list"])
    })
  }

}
