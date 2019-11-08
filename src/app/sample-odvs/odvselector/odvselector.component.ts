import {Component, Input, OnInit} from '@angular/core';
import * as _moment from 'moment';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {OnDateSelectorServiceService} from './on-date-selector-service.service';
const moment = _moment;

@Component({
  selector: 'app-odvselector',
  templateUrl: './odvselector.component.html',
  styleUrls: ['./odvselector.component.css']
})
export class ODVSelectorComponent {

  vm$ = this.onDateSelectorService.vm$;

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

  constructor(private onDateSelectorService: OnDateSelectorServiceService) {
  }


}
