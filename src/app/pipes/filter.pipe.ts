import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost = [];
    for(const dato of value){
      if(dato.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPost.push(dato);
      };
    };
    return resultPost;
  }

}
