import {Component, Input, OnInit} from '@angular/core';
import * as _moment from 'moment';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {OnDateSelectorService} from './on-date-selector.service';
const moment = _moment;

@Component({
  selector: 'app-odvselector',
  templateUrl: './odvselector.component.html',
  styleUrls: ['./odvselector.component.scss']
})
export class ODVSelectorComponent {

  vm$ = this.onDateSelectorService.vm$;

  constructor(private onDateSelectorService: OnDateSelectorService) {
  }

  //todo: service per component

}
