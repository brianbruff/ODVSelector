import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {OnDateSelectorService} from '../on-date-selector.service';

@Component({
  selector: 'app-month-sel',
  templateUrl: './month-sel.component.html',
  styleUrls: ['./month-sel.component.scss']
})
export class MonthSelComponent implements OnInit {

  @Input() months: Observable<Array<number>>;

  constructor(private selectorService: OnDateSelectorService) { }

  ngOnInit() {
  }

  selectMonth(month: number) {
    this.selectorService.selectMonth(month);
  }
}
