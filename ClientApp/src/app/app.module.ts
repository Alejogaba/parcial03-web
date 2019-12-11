import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
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
import { RutaAddComponent } from './ruta-add/ruta-add.component';
import { TiqueteAddComponent } from './tiquete-add/tiquete-add.component';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltroRutasPipe } from './pipes/filtro-rutas.pipe';
import { CustomErrorHandlerService } from './@base/services/custom-error-handler.service';



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
    MiAlertaModalComponent,
    RutaAddComponent,
    TiqueteAddComponent,
    FiltroRutasPipe
  ],
  
  imports: [
    ToastrModule.forRoot(),
    NgbModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: RutaAddComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'tiquete', component: TiqueteAddComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
   
  ],
  exports: [
    MiAlertaModalComponent
 ],
  providers: [{
    provide: ErrorHandler,
    useClass: CustomErrorHandlerService,
  },],
  bootstrap: [AppComponent],
  entryComponents: [
    MiAlertaModalComponent
]
})
export class AppModule { }
