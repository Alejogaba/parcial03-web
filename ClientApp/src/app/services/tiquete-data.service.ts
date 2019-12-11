import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { Tiquete } from '../models/tiquete';

export const BASE_URL = new InjectionToken<string>('BASE_URL');
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
  providedIn: 'root'
})
export class TiqueteDataService {
    get(): Observable<Tiquete[]> {
        return this.http.get<Tiquete[]>(this.baseUrl+'api/Tiquete').pipe(
          tap(_ =>this.log('Se consulta la informacion')), 
          catchError(this.myhandleError));
      }
     
    
      add(producto: Tiquete): Observable<Tiquete> {
        
        return this.http.post<Tiquete>(this.baseUrl+'api/Tiquete', producto, httpOptions).pipe(
          tap((newProducto: Tiquete) => this.log(`Se registro la informacion con el id=${newProducto.id_ruta}`)),
          catchError(this.myhandleError)
          );
        }
  constructor(private http: HttpClient,@Inject('BASE_URL') private baseUrl:string) { }

  myhandleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    if (error.status == "400") {
        errorMessage = `Error: No existe en la base de datos`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


public log(message: string) {
    console.log(message);
}

private mostrarError500(error: any): void {
    console.error(error);
}

mostrarError400(errorMessage){
    window.alert('no existe');
    return throwError(errorMessage);
}
}
