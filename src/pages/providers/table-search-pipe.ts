import { Pipe, Injectable, PipeTransform } from '@angular/core';

@Pipe({
    name: 'table-search-pipe',
    pure: false
})
@Injectable()
export class TableSearchPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        return items.filter(item => item['ui-checkbox-on'] == true);
    }
}