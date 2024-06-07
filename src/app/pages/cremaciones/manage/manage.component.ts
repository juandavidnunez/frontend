import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cremaciones } from 'src/app/models/cremaciones.model';
import { Servicios } from 'src/app/models/servicios.model';
import { CremacionesService } from 'src/app/services/cremaciones.service';
import { ServiciosService } from 'src/app/services/servicios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  mode: number;
  cremacion:Cremaciones
  theFormGroup:FormGroup
  trySend:boolean
  servicios:Servicios[]

  constructor(private activateRoute:ActivatedRoute, private service: CremacionesService,private router:Router, private theFormBuilder: FormBuilder,
    private serviciosService: ServiciosService
  ) {
    this.servicios=[]
    this.trySend=false
    this.mode=1;
    this.cremacion={
      id: 0, 
      ubicacion:"", 
      fecha_hora: new Date,
      servicio:{
        id: null
      }
    }
   }

   serviciosList(){
    this.serviciosService.list().subscribe(data=>{
      this.servicios=data
    })
   }

  ngOnInit(): void {
    this.serviciosList()
    this.configFormGroup()
    const currentUrl= this.activateRoute.snapshot.url.join('/');
    if (currentUrl.includes('view')) {
      this.mode=1;
    }
    if (currentUrl.includes('create')) {
      this.mode=2;
    } if (currentUrl.includes('update')) {
      this.mode=3;
    } 
    if(this.activateRoute.snapshot.params.id){
      this.cremacion.id=this.activateRoute.snapshot.params.id
      this.getCremacion(this.cremacion.id)
    }
  
  }
  configFormGroup(){
    this.theFormGroup=this.theFormBuilder.group({
      // primer elemento del vector, valor por defecto
      // lista, serán las reglas
      ubicacion:['',[Validators.required,Validators.minLength(2),Validators.maxLength(200)]],
      fecha_hora:[null, Validators.required],
      idServicio:[null, Validators.required]
    })
  }
  get getTheFormGroup(){
    return this.theFormGroup.controls
  }
  // getTheaterData(){
  //   this.theater.capacity=this.getTheFormGroup.capacity.value
  //   this.theater.location=this.getTheFormGroup.location.value
  // }
  getCremacion(id:number){
    this.service.view(id).subscribe(data=>{
      this.cremacion=data
      console.log(JSON.stringify(this.cremacion));

    })
  }  

  create(){
    if (this.theFormGroup.invalid) {
      this.trySend=true
      Swal.fire("Error en el formulario","Ingrese correctamente los datos solicitados","error")
      return
    }
    this.service.create(this.cremacion).subscribe(data=>{
      Swal.fire("Creación Exitosa","Se ha creado un nuevo registro","success")
      this.router.navigate(["cremaciones/list"])
    })
  }
  update(){
    if (this.theFormGroup.invalid) {
      this.trySend=true
      Swal.fire("Error en el formulario","Ingrese correctamente los datos solicitados","error")
      return
    }
    this.service.update(this.cremacion).subscribe(data=>{
      Swal.fire("Actualización Exitosa","Se ha actualizado el registro","success")
      this.router.navigate(["cremaciones/list"])
    })
  }

}
