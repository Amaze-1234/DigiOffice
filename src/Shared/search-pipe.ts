import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  

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
