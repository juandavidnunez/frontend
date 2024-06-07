import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Conductor } from 'src/app/models/conductor.model';
import { ConductorService } from 'src/app/services/conductor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  
  mode: number;
  conductor:Conductor
  theFormGroup:FormGroup
  trySend:boolean

  constructor(private activateRoute:ActivatedRoute, private service: ConductorService,private router:Router, private theFormBuilder: FormBuilder) {
    this.trySend=false
    this.mode=1;
    this.conductor={_id:"",name:"", email:"",
      password:""}
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
      this.conductor._id=this.activateRoute.snapshot.params.id
      this.getconductor(this.conductor._id)
    }
  
  }
  configFormGroup(){
    this.theFormGroup=this.theFormBuilder.group({
      // primer elemento del vector, valor por defecto
      // lista, serán las reglas
      name:['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      email:['',[Validators.required,Validators.email,Validators.minLength(2),Validators.maxLength(20)]],
      password:['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]]

    })
  }
  get getTheFormGroup(){
    return this.theFormGroup.controls
  }
  // getTheaterData(){
  //   this.theater.capacity=this.getTheFormGroup.capacity.value
  //   this.theater.location=this.getTheFormGroup.location.value
  // }
  getconductor(_id:string){
    this.service.view(_id).subscribe(data=>{
      this.conductor=data
      console.log(JSON.stringify(this.conductor));

    })
  }  

  create(){
    if (this.theFormGroup.invalid) {
      this.trySend=true
      Swal.fire("Error en el formulario","Ingrese correctamente los datos solicitados","error")
      return
    }
    this.service.create(this.conductor).subscribe(data=>{
      Swal.fire("Creación Exitosa","Se ha creado un nuevo registro","success")
      this.router.navigate(["conductor/list"])
    })
  }
  update(){
    if (this.theFormGroup.invalid) {
      this.trySend=true
      Swal.fire("Error en el formulario","Ingrese correctamente los datos solicitados","error")
      return
    }
    this.service.update(this.conductor).subscribe(data=>{
      Swal.fire("Actualización Exitosa","Se ha actualizado el registro","success")
      this.router.navigate(["conductor/list"])
    })
  }

}
