import { Injectable } from '@angular/core';
import {CurvesService} from '../../curves/curves.service';
import {combineAll, distinct, map, tap} from 'rxjs/operators';
import {BehaviorSubject, of, Subject} from 'rxjs';
import { combineLatest} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class OnDateSelectorServiceService {
  private yearSelectedAction = new BehaviorSubject<number>(null);
  private monthSelectedAction = new Subject<number>();
  private daySelectedAction = new Subject<number>();

  yearSelectedAction$ = this.yearSelectedAction.asObservable();
  monthSelectedAction$ = this.monthSelectedAction.asObservable();
  daySelectedAction$ = this.daySelectedAction.asObservable();

  $distinctYears = this.curveService.ondates$.pipe(
    map(ondates  => {
      const years = ondates.map(ods => {
        return ods.year();
      });
      return [...new Set(years)];
    })
  );

  $distinctMonths = of(
    'January', 'Febuary', 'March', 'April',
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December');


  vm$ = combineLatest([this.curveService.ondates$, this.yearSelectedAction$])
    .pipe(
    map(([ondates, yearSelected])  => {
      const years = ondates.map(ods => {
        return ods.year();
      });
      return [...new Set(years)];
    })
  );

  constructor(private curveService: CurvesService) { }
}
