import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { FiltroEjemploPipe } from './pipes/filtro-ejemplo.pipe';
import { ModalEjemploComponent } from './modals/modal-ejemplo/modal-ejemplo.component';
import { AlertModalComponent } from './modals/alert-modal/alert-modal.component';
import { AlertaModalComponent } from './modals/alerta-modal/alerta-modal.component';
import { MiAlertaModalComponent } from './@base/modals/mi-alerta-modal/mi-alerta-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EjemploComponent,
    FiltroEjemploPipe,
    ModalEjemploComponent,
    AlertModalComponent,
    MiAlertaModalComponent
  ],
  
  imports: [
    NgbModule,
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: EjemploComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
   
  ],
  exports: [
    MiAlertaModalComponent
 ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    MiAlertaModalComponent
]
})
export class AppModule { }
