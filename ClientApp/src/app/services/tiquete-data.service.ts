import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';

export const BASE_URL = new InjectionToken<string>('BASE_URL');
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
  providedIn: 'root'
})
export class TiqueteDataService {

  constructor(private http: HttpClient,@Inject('BASE_URL') private baseUrl:string) { }
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
