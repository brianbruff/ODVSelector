import {Injectable} from '@angular/core';
import {CurvesService} from '../../curves/curves.service';
import {combineAll, distinct, filter, map, tap} from 'rxjs/operators';
import {BehaviorSubject, of, Subject} from 'rxjs';
import {combineLatest} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OnDateSelectorService {
  private yearSelectedAction = new BehaviorSubject<number>(null);
  private monthSelectedAction = new BehaviorSubject<number>(null);
  private daySelectedAction = new BehaviorSubject<number>(null);

  ondates$ = this.curveService.ondates$;

  yearSelectedAction$ = this.yearSelectedAction.asObservable();
  monthSelectedAction$ = this.monthSelectedAction.asObservable();
  daySelectedAction$ = this.daySelectedAction.asObservable();


  years$ = this.ondates$.pipe(
    map(ondates => {
      const years = ondates.map(ods => {
        return ods.year();
      });
      return [...new Set(years)];
    })
  );

 // months$ = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  days$ = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31]);

  versions$ = of(['final']);


  vm$ = combineLatest(
    [this.curveService.ondates$,  this.yearSelectedAction$])
    .pipe(
      map(([ondates, yearSelected]) => {

        const years = ondates.map(ods => {
          return ods.year();
        });

        const months = ondates.filter(x => x.year() === yearSelected);

        let x = null;
        if (!!months)
          x = 2;

        const days = [];
        const versions = [];

        return {
          years: [...new Set(years)],
          months: [...new Set(months)],
          days, versions
        };
      })
    );

  constructor(private curveService: CurvesService) {
  }

  selectYear(year: number) {
    this.yearSelectedAction.next(year);
  }
}
