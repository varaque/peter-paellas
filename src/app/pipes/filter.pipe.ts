import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
   const resultPaellas = [];
   for(const paella of value){

    if(paella.cocinero.toLowerCase().indexOf(arg.toLowerCase()) > -1){
      resultPaellas.push(paella);
            };

            if(paella.ubicacion.toLowerCase().indexOf(arg.toLowerCase()) > -1){
              resultPaellas.push(paella);
                    };

      if(paella.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
resultPaellas.push(paella);
      };
      
   };
    return resultPaellas;
  }

}
