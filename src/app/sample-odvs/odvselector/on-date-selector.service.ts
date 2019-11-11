import {Injectable} from '@angular/core';
import {CurvesService} from '../../curves/curves.service';
import {combineAll, distinct, filter, map, mergeMap, startWith, tap} from 'rxjs/operators';
import {BehaviorSubject, of, Subject} from 'rxjs';
import {combineLatest} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OnDateSelectorService {
  private yearSelectedAction = new BehaviorSubject<number>(null);
  private monthSelectedAction = new BehaviorSubject<number>(null);
  private daySelectedAction = new BehaviorSubject<number>(null);

  private years$ = this.curveService.ondates$.pipe(
    map(x => x.map(m => m.year()))
  );

  private months$ = combineLatest([this.curveService.ondates$, this.yearSelectedAction]).pipe(
    map(([ondates, selectedYear]) => ondates.filter(od => od.year() === selectedYear).map(od => od.month()))
    );

  private days$ = combineLatest([this.curveService.ondates$, this.yearSelectedAction, this.monthSelectedAction]).pipe(
    map(([ondates, selectedYear, selectedMonth]) =>
      ondates.filter(od => od.year() === selectedYear && od.month() === selectedMonth).map(od => od.day()))
  );

  private version$ = combineLatest([this.yearSelectedAction, this.monthSelectedAction, this.daySelectedAction]).pipe(
    mergeMap(([yearSelected, monthSelected, daySelected]) => this.curveService.getRandomVersions(yearSelected, monthSelected, daySelected))
    );

  vm$ = combineLatest(
    [this.years$, this.months$, this.days$, this.version$])
    .pipe(
      map(([years, months, days, versions]) =>
        ({ years: [...new Set(years)], months: [...new Set(months)], days: [...new Set(days)], versions}))
    );

  constructor(private curveService: CurvesService) {
  }

  selectYear(year: number) {
    this.yearSelectedAction.next(year);
    this.monthSelectedAction.next(null);
    this.daySelectedAction.next(null);
  }

  selectMonth(month: number) {
    this.monthSelectedAction.next(month);
    this.daySelectedAction.next(null);
  }

  selectDay(day: number) {
    this.daySelectedAction.next(day);
  }
}
