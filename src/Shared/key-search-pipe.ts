import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keySearch'
})
export class KeySearchPipe implements PipeTransform {

  transform(items:[],searchText:string,key:string): unknown {
        if (!items || !searchText|| !key) {
      return items;
    }
 
    const lowerSearch = searchText.toLowerCase();
 
    return items.filter(item => {
      return Object.keys(item).some(val =>
        val?.toString().toLowerCase().includes(lowerSearch)
      );
    });
  }

}
