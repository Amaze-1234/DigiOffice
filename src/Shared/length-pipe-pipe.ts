import { Pipe, PipeTransform } from '@angular/core';
import { SearchPipe } from './search-pipe';
@Pipe({
  name: 'lengthPipe'
})
export class LengthPipePipe implements PipeTransform{

<<<<<<< HEAD
  transform(search:Pipe): unknown {
    return search.name;
=======
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
>>>>>>> 7850361f9d704fc88b1be9c04e18512eda65c414
  }

}
