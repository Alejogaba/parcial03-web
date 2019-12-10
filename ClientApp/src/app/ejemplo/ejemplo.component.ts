import { Component, OnInit } from '@angular/core';
import {ObjectEjemplo} from '../models/object-ejemplo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MiAlertaModalComponent} from '../@base/modals/mi-alerta-modal/mi-alerta-modal.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {
miejemplo:ObjectEjemplo;
registerForm: FormGroup;
submitted = false;
  constructor( private formBuilder: FormBuilder ) { }
  ngOnInit() {
    this.miejemplo= new ObjectEjemplo;
    this.registerForm = this.formBuilder.group({
      id: [this.miejemplo.id, Validators.required],
      nombre:[this.miejemplo.nombre, Validators.required]
  });
  }

  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
  
        return;
    }
   
}


}
