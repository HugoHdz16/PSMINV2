import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
  

  constructor(private fb: FormBuilder, private apiService: ApiService, private tr: ToastrService) {}
  
  equipo = {

    NumUnico: '',
    EID: '',
    NombreA: '',
    TipoEquipo: '',
    NoSerie: '',
    Fecha: '',
    Garantia: '',
    Marca: '',
    Modelo: '',
    Observacion: '',
    Activo: '',
    Color: ''

  }


  AddDevice(){
    this.apiService.AddDevice(this.equipo).subscribe(x => {
      this.tr.success("Equipo agregado con exito.")
    })
  }

}

