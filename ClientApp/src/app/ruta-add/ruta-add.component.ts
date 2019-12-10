import { Component, OnInit } from '@angular/core';
import {ObjectEjemplo} from '../models/object-ejemplo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {Areolinea} from '../models/areolinea';
import {ServiceareolineaService} from '../services/serviceareolinea.service'
import { RutaDataService } from '../services/ruta-data.service';
import { Ruta } from '../models/ruta';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ruta-add',
  templateUrl: './ruta-add.component.html',
  styleUrls: ['./ruta-add.component.css']
})
export class RutaAddComponent implements OnInit {
  ruta:Ruta;
  registerForm: FormGroup;
  submitted = false;
    constructor( private formBuilder: FormBuilder, private rutaservice:RutaDataService,
      private toastr:ToastrService) { }
    ngOnInit() {
      this.ruta=new Ruta;
      this.registerForm = this.formBuilder.group({
        origen:[this.ruta.origen, Validators.required],
        destino:[this.ruta.destino, Validators.required],
        valor: [this.ruta.valor, [Validators.required, Validators.min(1), Validators.pattern("^[0-9]*$")]]
    });
    }
    add(): void {
      if (!this.ruta) { return; }
  
      this.rutaservice.add(this.ruta)
        .subscribe( producto  => {
          this.toastr.success('Se agrego correctamente la ruta');
        
               });
    }
    get f() { return this.registerForm.controls; }
    onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
    
          return;
      }
        this.add();
  }

}
