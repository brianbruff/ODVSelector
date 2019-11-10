import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {OnDateSelectorService} from '../on-date-selector.service';

@Component({
  selector: 'app-year-sel',
  templateUrl: './year-sel.component.html',
  styleUrls: ['./year-sel.component.scss']
})
export class YearSelComponent {
  @Input() years: Observable<Array<number>>;

  constructor(private selectorService: OnDateSelectorService) { }

  selectYear(year: number) {
    this.selectorService.selectYear(year);
  }
}
