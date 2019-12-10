import { Component, OnInit } from '@angular/core';
import { Tiquete } from '../models/tiquete';
import { Cliente } from '../models/cliente';
import { Ruta } from '../models/ruta';
import { ClienteDataService } from '../services/cliente-data.service';
import { TiqueteDataService } from '../services/tiquete-data.service';
import { RutaDataService } from '../services/ruta-data.service';



@Component({
  selector: 'app-tiquete-add',
  templateUrl: './tiquete-add.component.html',
  styleUrls: ['./tiquete-add.component.css']
})
export class TiqueteAddComponent implements OnInit {
rutas:Ruta[];
tiquete:Tiquete;
clientes:Cliente[];
  constructor(private rutaservice:RutaDataService) { }
  ngOnInit() {
    this.getRutas();
  }
  getRutas() {
    this.rutaservice.get().subscribe(c => {
      return this.rutas = c;
    });
    }
}
