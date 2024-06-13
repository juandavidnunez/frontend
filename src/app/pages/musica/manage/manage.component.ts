import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Musica } from 'src/app/models/musica.model';
import { Tipo } from 'src/app/models/tipo.model';
import { MusicaService } from 'src/app/services/musica.service';
import { TipoService } from 'src/app/services/tipo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  mode: number;
  musica: Musica;
  theFormGroup: FormGroup;
  trySend: boolean;
tipo : Tipo[]
  constructor(
    private tipoService: TipoService,
    private activateRoute: ActivatedRoute,
    private service: MusicaService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.trySend = false;
    this.mode = 1;
    this.musica = { id: 0, valor_hora: 0,nombre_grupo: '', tipo_id: {
      id: null,
    }

   }
    this.tipo=[]
    
  }
  tipoList(){
    this.tipoService.list().subscribe(data=>{
      this.tipo=data
    })
  }

  ngOnInit(): void {
    this.tipoList();
    this.configFormGroup();
    this.setMode();
    
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
      valor_hora:[0, [Validators.required, Validators.min(1), Validators.max(9999)]],
      nombre_grupo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      itipo_id: [null,Validators.required]
    });
  }

  get formControls() {
    return this.theFormGroup.controls;
  }


  create(): void {
    console.log(JSON.stringify(this.musica))
    if (this.theFormGroup.invalid) {
      this.trySend = true;
      Swal.fire("Error en el formulario", "Ingrese correctamente los datos solicitados", "error");
      return;
    }
    this.service.create(this.musica).subscribe(() => {
      Swal.fire("Creación Exitosa", "Se ha creado un nuevo registro", "success");
      this.router.navigate(["musicaes/list"]);
    });
  }

 
}
