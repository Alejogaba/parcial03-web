import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Tiquete } from '../models/tiquete';
import { Cliente } from '../models/cliente';
import { Ruta } from '../models/ruta';
import { ClienteDataService } from '../services/cliente-data.service';
import { TiqueteDataService } from '../services/tiquete-data.service';
import { RutaDataService } from '../services/ruta-data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-tiquete-add',
  templateUrl: './tiquete-add.component.html',
  styleUrls: ['./tiquete-add.component.css']
})
export class TiqueteAddComponent implements OnInit {
rutas:Ruta[];
tiquete:Tiquete;
clientes:Cliente[];
registerForm: FormGroup;
searchText: string;
@Output() seleccionado = new EventEmitter<Ruta>();
submitted = false;
  constructor( private formBuilder: FormBuilder,private rutaservice:RutaDataService,private tiqueteservice:TiqueteDataService) { }
  ngOnInit() {
    this.getRutas();
    this.tiquete=new Tiquete();
    this.tiquete.total=0;
    this.registerForm = this.formBuilder.group({
      id_cliente:[this.tiquete.id_cliente, Validators.required],
      id_ruta:[this.tiquete.id_ruta, Validators.required],
      cantidad: [this.tiquete.cantidad, [Validators.required, Validators.min(1), Validators.pattern("^[0-9]*$")]]
  });
  }
  addtiquete(): void {
    if (!this.tiquete) { return; }
    this.tiqueteservice.add(this.tiquete).subscribe( producto  => {
      console.log("registrado correctamente")
             });
  }
  getRutas() {
    this.rutaservice.get().subscribe(c => {
      return this.rutas = c;
    });
    }
    seleccionar(ruta: Ruta) {
      this.seleccionado.emit(ruta);
  }
    get f() { return this.registerForm.controls; }
    onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
    
          return;
      }
        this.addtiquete();
  }
}
