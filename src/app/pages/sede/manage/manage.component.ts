import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sede } from 'src/app/models/sede.model';
import { SedeService } from 'src/app/services/sede.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  mode: number;
  sede:Sede
  theFormGroup:FormGroup
  trySend:boolean

  constructor(private activateRoute:ActivatedRoute, private service: SedeService,private router:Router, private theFormBuilder: FormBuilder) {
    this.trySend=false
    this.mode=1;
    this.sede= {id:0,nombre:"",direccion:"",
    telefono:0,
    correo_electronico: "",
    ciudad_id:0}
   }

  ngOnInit(): void {
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
      this.sede.id=this.activateRoute.snapshot.params.id
      this.getSede(this.sede.id)
    }
  
  }
  configFormGroup(){
    this.theFormGroup=this.theFormBuilder.group({
      // primer elemento del vector, valor por defecto
      // lista, serán las reglas

      ciudad_id:[0,[Validators.required,Validators.min(1),Validators.max(100)]],
      telefono:[0,[Validators.required,Validators.min(1),Validators.max(9999999999)]],


      nombre:['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      correo_electronico:['',[Validators.required,Validators.email,Validators.minLength(2),Validators.maxLength(40)]],
      direccion:['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],


    })
  }
  get formControls() {
    return this.theFormGroup.controls;
  }
  get getTheFormGroup(){
    return this.theFormGroup.controls
  }
  // getTheaterData(){
  //   this.theater.capacity=this.getTheFormGroup.capacity.value
  //   this.theater.location=this.getTheFormGroup.location.value
  // }
  getSede(id:number){
    this.service.view(id).subscribe(data=>{
      this.sede=data
      console.log(JSON.stringify(this.sede));

    })
  }  

  create(){
    if (this.theFormGroup.invalid) {
      this.trySend=true
      Swal.fire("Error en el formulario","Ingrese correctamente los datos solicitados","error")
      return
    }
    this.service.create(this.sede).subscribe(data=>{
      Swal.fire("Creación Exitosa","Se ha creado un nuevo registro","success")
      this.router.navigate(["sede/list"])
    })
  }
  update(){
    if (this.theFormGroup.invalid) {
      this.trySend=true
      Swal.fire("Error en el formulario","Ingrese correctamente los datos solicitados","error")
      return
    }
    this.service.update(this.sede).subscribe(data=>{
      Swal.fire("Actualización Exitosa","Se ha actualizado el registro","success")
      this.router.navigate(["sede/list"])
    })
  }

}
