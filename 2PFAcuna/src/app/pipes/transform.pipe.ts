import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    const nombreCompleto = value.nombre + ' ' + value.apellido
    
    return nombreCompleto;
  }

}
