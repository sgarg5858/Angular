import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(value: any, ...args: any): any {

    if(args=='M')
    {
      return "Mr."+value;
    }
    else if(args=='F')
    {
      return "Mrs."+value;
    }
    return value;
  }

}
