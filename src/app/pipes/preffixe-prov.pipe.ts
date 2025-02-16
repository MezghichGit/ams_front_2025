import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preffixeProv',
  standalone: false
})
export class PreffixeProvPipe implements PipeTransform {

  transform(value:string): string {
    return "Provider : "+value;
  };
}
