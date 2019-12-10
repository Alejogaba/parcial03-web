import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { Ruta } from '../models/ruta';

export const BASE_URL = new InjectionToken<string>('BASE_URL');
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
  providedIn: 'root'
})
export class RutaDataService {

  constructor(private http: HttpClient,@Inject('BASE_URL') private baseUrl:string) { }

  get(): Observable<Ruta[]> {
    return this.http.get<Ruta[]>(this.baseUrl+'api/Ruta').pipe(
      tap(_ =>this.log('Se consulta la informacion')), 
      catchError(this.handleError<Ruta[]>('get', [])));
  }
 

  add(producto: Ruta): Observable<Ruta> {
    
    return this.http.post<Ruta>(this.baseUrl+'api/Ruta', producto, httpOptions).pipe(
      tap((newProducto: Ruta) => this.log(`Se registro la informacion con el id=${newProducto.id_ruta}`)),
      catchError(this.handleError<Ruta>('addProducto',null))
      );
    }
    public handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
          if (error.status == "500") {
              this.mostrarError500(error);
          }
  
          if (error.status == "404") {
              this.mostrarError400(error);
          }
  
          return of(result as T);
      };
  }
  
  public log(message: string) {
      console.log(message);
  }
  
  private mostrarError500(error: any): void {
      console.error(error);
  }
  
  private mostrarError400(error: any): void {
      console.error(error);
      let contadorValidaciones: number = 0;
      let mensajeValidaciones: string =
          `No se encontro`;
          
      for (const prop in error.error.errors) {
          contadorValidaciones++;
          mensajeValidaciones += `<strong>${contadorValidaciones}. ${prop}:</strong>`;
  
          error.error.errors[prop].forEach(element => {
              mensajeValidaciones += `<br/> - ${element}`;
          });
  
          mensajeValidaciones += `<br/>`;
      }
   
  }
}
