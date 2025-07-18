import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
  
})
export class SearchPipe implements PipeTransform {
  

//  transform(items: any[], searchText: string): any[] {
//     if (!items || !searchText) {
//       return items;
//     }
 
//     const lowerSearch = searchText.toLowerCase();
 
//     return items.filter(item => {
//       return Object.values(item).some(val =>
//         val?.toString().toLowerCase().includes(lowerSearch)
//       );
//     });
//   }
 transform(items: any[], searchText: string, designationId: string): any[] {
    if (!items) return [];

    const lowerSearch = searchText?.toLowerCase() || '';

    return items.filter(item => {
      const matchesSearch = lowerSearch === '' || Object.values(item).some(val =>
        val?.toString().toLowerCase().includes(lowerSearch)
      );

      const matchesDesignation = !designationId || item.designationID == designationId;

      return matchesSearch && matchesDesignation;
    });
  }


}
