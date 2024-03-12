import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allRecpsArray:any[],filterCat:string): any {

    const result:any=[]

    if(!allRecpsArray || !filterCat){
      return allRecpsArray
    }
    else
    {
      return allRecpsArray.filter((item:any)=>item.Category==filterCat)
    }
  }

}
