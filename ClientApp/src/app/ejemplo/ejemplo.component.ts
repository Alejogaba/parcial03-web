import { Component, OnInit } from '@angular/core';
import {ObjectEjemplo} from '../models/object-ejemplo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {Areolinea} from '../models/areolinea';
import {ServiceareolineaService} from '../services/serviceareolinea.service'

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {
miejemplo:ObjectEjemplo;
miareolinea:Areolinea;
registerForm: FormGroup;
submitted = false;
  constructor( private formBuilder: FormBuilder, private areolineaservice:ServiceareolineaService ) { }
  ngOnInit() {
    this.miejemplo= new ObjectEjemplo;
    this.miareolinea=new Areolinea;
    this.miareolinea.id=2;
    this.miareolinea.origen='';
    this.registerForm = this.formBuilder.group({
      ruta:[this.miareolinea.origen, Validators.required]
  });
  }
  comprobar(){
    this.areolineaservice.buscar(this.miareolinea.origen).subscribe( t => this.miareolinea = t);
  }

  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
  
        return;
    }
   this.comprobar();
}


}
