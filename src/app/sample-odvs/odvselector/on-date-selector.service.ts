import {Injectable} from '@angular/core';
import {CurvesService} from '../../curves/curves.service';
import {combineAll, distinct, filter, map, mergeMap, tap} from 'rxjs/operators';
import {BehaviorSubject, of, Subject} from 'rxjs';
import {combineLatest} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OnDateSelectorService {
  private yearSelectedAction = new BehaviorSubject<number>(null);
  private monthSelectedAction = new BehaviorSubject<number>(null);
  private daySelectedAction = new BehaviorSubject<number>(null);

  yearSelectedAction$ = this.yearSelectedAction.asObservable();
  monthSelectedAction$ = this.monthSelectedAction.asObservable();
  daySelectedAction$ = this.daySelectedAction.asObservable();

  private version$ = combineLatest(
    [this.yearSelectedAction$, this.monthSelectedAction$, this.daySelectedAction$]).pipe(
    mergeMap(([yearSelected, monthSelected, daySelected]) => this.curveService.getRandomVersions(yearSelected, monthSelected, daySelected))
    );


  vm$ = combineLatest(
    [this.curveService.ondates$, this.version$, this.yearSelectedAction$, this.monthSelectedAction$, this.daySelectedAction$])
    .pipe(
      map(([ondates, versions, yearSelected, monthSelected, daySelected]) => {

        const years = ondates.map(ods => {
          return ods.year();
        });

        const months = ondates
          .filter(x => x.year() === yearSelected)
          .map(x => x.month());

        const days = ondates
          .filter(x => x.year() === yearSelected && x.month() === monthSelected)
          .map(x => x.day());

        return {
          years: [...new Set(years)],
          months: [...new Set(months)],
          days: [...new Set(days)],
          versions
        };
      })

    );

  constructor(private curveService: CurvesService) {
  }

  selectYear(year: number) {
    this.yearSelectedAction.next(year);
  }

  selectMonth(month: number) {
    this.monthSelectedAction.next(month);
  }

  selectDay(day: number) {
    this.daySelectedAction.next(day);
  }
}
