import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, range} from 'rxjs';
import * as _moment from 'moment';
import {map, toArray} from 'rxjs/operators';
const moment = _moment;

@Injectable({
  providedIn: 'root'
})
export class CurvesService {

  private  ondatesSubject = new BehaviorSubject([
    moment('2000-01-01', 'YYYY-MM-DD HH:mm:ss'),
    moment('2000-01-03', 'YYYY-MM-DD HH:mm:ss'),
    moment('2000-04-03', 'YYYY-MM-DD HH:mm:ss'),
    moment('2000-07-06', 'YYYY-MM-DD HH:mm:ss'),
    moment('2001-02-02', 'YYYY-MM-DD'),
    moment('2002-03-03', 'YYYY-MM-DD'),
    moment('2003-04-04', 'YYYY-MM-DD'),
    moment('2004-05-05', 'YYYY-MM-DD'),
    moment('2005-06-06', 'YYYY-MM-DD'),
    moment('2006-07-07', 'YYYY-MM-DD'),
    moment('2007-08-08', 'YYYY-MM-DD'),
    moment('2008-09-09', 'YYYY-MM-DD'),
    moment('2009-10-10', 'YYYY-MM-DD'),
    moment('2010-11-11', 'YYYY-MM-DD'),
    moment('2011-12-12', 'YYYY-MM-DD'),
    moment('2012-01-13', 'YYYY-MM-DD'),
    moment('2013-02-14', 'YYYY-MM-DD'),
    moment('2014-03-15', 'YYYY-MM-DD'),
    moment('2015-04-16', 'YYYY-MM-DD'),
    moment('2016-05-17', 'YYYY-MM-DD'),
    moment('2017-06-18', 'YYYY-MM-DD'),
    moment('2018-07-19', 'YYYY-MM-DD'),
    moment('2019-05-20', 'YYYY-MM-DD'),
    moment('2019-06-21', 'YYYY-MM-DD'),
    moment('2019-06-30', 'YYYY-MM-DD'),
    moment('2019-07-22', 'YYYY-MM-DD'),
    moment('2019-08-20', 'YYYY-MM-DD'),
    moment('2019-08-21', 'YYYY-MM-DD'),
    moment('2019-08-22', 'YYYY-MM-DD'),
    moment('2019-08-23', 'YYYY-MM-DD'),
    moment('2019-08-24', 'YYYY-MM-DD'),
    moment('2019-08-25', 'YYYY-MM-DD'),
    moment('2019-08-26', 'YYYY-MM-DD'),
    moment('2019-08-27', 'YYYY-MM-DD'),
    moment('2019-08-28', 'YYYY-MM-DD')]);


  public ondates$ = this.ondatesSubject.asObservable();

  constructor() { }

  getRandomVersions(year: number, month: number, day: number) {
    if (year && month !== null && day != null) {
      const days: Array<number> = [];
      for (let idx = 1; idx < 6; ++idx) {
        days.push(idx);
      }
      return new BehaviorSubject(days).asObservable();
    } else {
      return new BehaviorSubject(null).asObservable();
    }
  }
}
