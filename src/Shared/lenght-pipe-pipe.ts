import { Pipe, PipeTransform } from '@angular/core';
import { SearchPipe } from './search-pipe';

@Pipe({
  name: 'lenghtPipe'
})
export class LenghtPipePipe implements PipeTransform {

  transform(value: unknown): unknown {
    return null;
  }

}
