import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone',
})
export class FormatPhonePipe implements PipeTransform {
  transform(value: string, separator = ' '): string {
    return value.replace(/\./g, separator);
  }
}
