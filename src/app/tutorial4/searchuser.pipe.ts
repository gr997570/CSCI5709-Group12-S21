import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchuser'
})
export class SearchuserPipe implements PipeTransform {
  transform(list: any[], filterText: string): any {
    return list ? list.filter(item => (item.firstName+" "+item.lastName).search(new RegExp(filterText, 'i')) > -1) : [];
  }
}
