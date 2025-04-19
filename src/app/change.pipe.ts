import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'change',
  pure:true,
  standalone:true
})
export class ChangePipe implements PipeTransform {

  transform(value: any[]): any[] {
    for(let i in value){
      value[i]*=3
    }
    return value
  }

}
