import { Pipe, PipeTransform } from '@angular/core';
import { SearchPipe } from './search-pipe';
@Pipe({
  name: 'lengthPipe'
})
export class LengthPipePipe implements PipeTransform{
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    const lowerSearch = searchText.toLowerCase();

    return items.filter(item => {
      return Object.values(item).some(val =>
        val?.toString().toLowerCase().includes(lowerSearch)
      );
    });
  }

}
