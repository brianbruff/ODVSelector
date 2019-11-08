import { Injectable } from '@angular/core';
import {CurvesService} from '../../curves/curves.service';
import {map, tap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class OnDateSelectorServiceService {

  vm$ = this.curveService.ondates$.pipe(
     tap(console.log),
    map(ondates => {
      console.log(`ondates: typeof:${typeof(ondates)}, value: ${ondates}`);
      ondates.map(ods => {
        console.log(`ods: typeof:${typeof(ods)}, value: ${ods}`);
        });
    })
  );

  constructor(private curveService: CurvesService) { }
}
