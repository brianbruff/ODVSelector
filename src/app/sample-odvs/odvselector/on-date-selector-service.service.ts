import { Injectable } from '@angular/core';
import {CurvesService} from '../../curves/curves.service';
import {distinct, map, tap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class OnDateSelectorServiceService {


  vm$ = this.curveService.ondates$.pipe(
    map(ondates => {
      const years = ondates.map(ods => {
        return ods.year();
      });
      return [...new Set(years)];
    })
  );

  constructor(private curveService: CurvesService) { }
}
