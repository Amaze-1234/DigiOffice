import { Pipe, PipeTransform } from '@angular/core';
import { SearchPipe } from './search-pipe';
@Pipe({
  name: 'lengthPipe'
})
export class LengthPipePipe implements PipeTransform{

  transform(search:Pipe): unknown {
    return search.name;
  }

}
