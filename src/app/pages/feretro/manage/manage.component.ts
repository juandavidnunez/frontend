import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Feretro } from 'src/app/models/feretro.model';
import { FeretroService } from 'src/app/services/feretro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  mode: number;
  feretro:Feretro
  theFormGroup:FormGroup
  trySend:boolean

  constructor(private activateRoute:ActivatedRoute, private service: FeretroService,private router:Router, private theFormBuilder: FormBuilder) {
    this.trySend=false
    this.mode=1;
    this.feretro={id:0,peso:0}
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
      this.feretro.id=this.activateRoute.snapshot.params.id
      this.getferetro(this.feretro.id)
    }
  
  }
  configFormGroup(){
    this.theFormGroup=this.theFormBuilder.group({
      // primer elemento del vector, valor por defecto
      // lista, serán las reglas
      peso:[0,[Validators.required,Validators.min(1),Validators.max(100)]]
    })
  }
  get formControls() {
    return this.theFormGroup.controls;
  }
  getferetro(id:number){
    this.service.view(id).subscribe(data=>{
      this.feretro=data
      console.log(JSON.stringify(this.feretro));

    })
  }  

  create(){
    if (this.theFormGroup.invalid) {
      this.trySend=true
      Swal.fire("Error en el formulario","Ingrese correctamente los datos solicitados","error")
      return
    }
    this.service.create(this.feretro).subscribe(data=>{
      Swal.fire("Creación Exitosa","Se ha creado un nuevo registro","success")
      this.router.navigate(["feretro/list"])
    })
  }
  update(){
    if (this.theFormGroup.invalid) {
      this.trySend=true
      Swal.fire("Error en el formulario","Ingrese correctamente los datos solicitados","error")
      return
    }
    this.service.update(this.feretro).subscribe(data=>{
      Swal.fire("Actualización Exitosa","Se ha actualizado el registro","success")
      this.router.navigate(["feretro/list"])
    })
  }

}
