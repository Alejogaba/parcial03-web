import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroEjemplo'
})
export class FiltroEjemploPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
