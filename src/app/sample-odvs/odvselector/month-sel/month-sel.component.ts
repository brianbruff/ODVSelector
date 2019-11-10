import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-month-sel',
  templateUrl: './month-sel.component.html',
  styleUrls: ['./month-sel.component.scss']
})
export class MonthSelComponent implements OnInit {

  @Input() months: Observable<Array<number>>;

  constructor() { }

  ngOnInit() {
  }

}
