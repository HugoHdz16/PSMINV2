import { Component } from '@angular/core';
import { Inventario } from '../../models/ListInv';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

  Inventario1: Inventario[] = [];

  constructor(private apiService: ApiService, private tr: ToastrService) {}

  ngOnInit(): void {
    this.getInventario();
  }

  getInventario(){
    this.apiService.getInventario().subscribe(data => {

      this.Inventario1 = data;

    });
  }


  Delete(id:any){ 

    this.apiService.DeleteInventario(id).subscribe( data => {
      this.tr.warning('Equipo eliminado');
    })

    this.getInventario();

  }


  onSelectChange(event: any) {
    const selectedId = event.target.value;
    if(selectedId !== "Default" ){
      this.Delete(selectedId);
    }
  }

  


}
