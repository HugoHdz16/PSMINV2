import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
  equipmentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.equipmentForm = this.fb.group({
      EID: [''],
      name: [''],
      type: [''],
      serial: [''],
      purchaseDate: [''],
      warranty: [''],
      vendor: ['']
    });
  }

  onSubmit() {
    console.log(this.equipmentForm.value);
  }
}
