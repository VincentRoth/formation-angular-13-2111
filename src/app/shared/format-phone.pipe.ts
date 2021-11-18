import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone',
})
export class FormatPhonePipe implements PipeTransform {
  transform(value: string, separator = ' '): string {
    if (!value || typeof value.replaceAll !== 'function') {
      return value;
    }
    return value?.replaceAll('.', separator);
  }
}
