import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {OnDateSelectorService} from '../on-date-selector.service';

@Component({
  selector: 'app-day-sel',
  templateUrl: './day-sel.component.html',
  styleUrls: ['./day-sel.component.scss']
})
export class DaySelComponent {
  @Input() days: Observable<Array<number>>;

  constructor(private selectorService: OnDateSelectorService) { }

  selectDay(day: number) {
    this.selectorService.selectDay(day);
  }

}
