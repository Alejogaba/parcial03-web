import { Component, Input, NgModule } from '@angular/core';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mi-alerta-modal',
  templateUrl: './mi-alerta-modal.component.html',
  styleUrls: ['./mi-alerta-modal.component.css'],
  
})

export class MiAlertaModalComponent{

    @Input() title;
    @Input() message;
    constructor(public activeModal: NgbActiveModal) { }
  

}
