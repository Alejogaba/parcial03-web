import { Pipe, PipeTransform } from '@angular/core';
import { Ruta } from '../models/ruta';

@Pipe({
  name: 'filtroRutas'
})
export class FiltroRutasPipe implements PipeTransform {

  transform(ruta: Ruta[], searchText: string){
    if (searchText == null) return ruta;
return ruta.filter(rutas =>
rutas.origen.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
||
rutas.destino.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
);}

}
