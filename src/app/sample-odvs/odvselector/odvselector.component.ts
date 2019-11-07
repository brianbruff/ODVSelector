import {Component, Input, OnInit} from '@angular/core';
import * as _moment from 'moment';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
const moment = _moment;

@Component({
  selector: 'app-odvselector',
  templateUrl: './odvselector.component.html',
  styleUrls: ['./odvselector.component.css']
})
export class ODVSelectorComponent implements OnInit {
  @Input() ondates$: Observable<_moment.Moment[]>;

  // $vm = this.ondates$.pipe(
  //   map(ods => {
  //     ods.map(od => {
  //       od.year();
  //     });
  //   }),
  //   catchError(err => {
  //     console.log(err);
  //     return of(null);
  //   })
  // );

  constructor() { }

  ngOnInit() {
    console.log(this.ondates$);


    let vm = this.ondates$.pipe(
      map(ods => {
        ods.map(od => {
          od.year();
        });
      }),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }

}
