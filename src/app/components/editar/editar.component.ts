import { Component } from '@angular/core';
import { Inventario } from '../../models/ListInv';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

  Inventario1: Inventario[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getInventario();
  }

  getInventario(){
    this.apiService.getInventario().subscribe(data => {

      this.Inventario1 = data;

    });
  }

  


}
