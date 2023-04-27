import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class CustomPipePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    if (null !== value && typeof value === 'string') {
      return value;
    } else {
      return 'Not String';
    }
  }
}
