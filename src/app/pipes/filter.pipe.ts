import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg == null || arg == undefined) { return value; }// || arg.length < 3
    const resultPaellas = [];
    for (const paella of value) {

      if (paella.provincia.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPaellas.push(paella);
      };

      if (paella.categoria.indexOf(arg) > -1) {
        resultPaellas.push(paella);
      };

    };
    return resultPaellas;
  }

}
